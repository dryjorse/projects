const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");

const pizzas = require("./models/pizzas");

app.use(cors());

app.get("/items", (req, res) => {
  const reserveQuerys = ["sortBy", "search", "offset", "limit", "id"];
  const { sortBy, search, offset = 0, limit = pizzas.length, id } = req.query;
  const searchParams = Object.keys(req.query).filter(
    (query) => !reserveQuerys.includes(query)
  );

  let customized = [...pizzas];

  if (id) {
    const elem = customized.find((obj) => +obj.id === +id);
    res.send(elem);
    return
  }

  if (sortBy) {
    customized =
      sortBy[0] === "-"
        ? customized.sort((a, b) =>
            a[sortBy.slice(1)] < b[sortBy.slice(1)] ? 1 : -1
          )
        : customized.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
  }

  if (searchParams.length) {
    searchParams.forEach((param) => {
      customized = customized.filter((elem) =>
        elem[param] !== undefined
          ? elem[param] == req.query[param] ||
            (elem[param].length && elem[param].includes(req.query[param]))
          : true
      );
    });
  }

  if (search) {
    customized = customized.filter((elem) =>
      Object.keys(elem).find((key) =>
        (elem[key] + "").toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  const count = customized.length;
  customized = customized.slice(+offset, +limit);

  res.send({
    count,
    result: customized,
  });
});

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
