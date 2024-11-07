import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import { routes } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
