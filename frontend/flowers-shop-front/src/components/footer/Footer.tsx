import { FC } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/images/icons/logo-white.svg";

const links = [
  {
    title: "Информация",
    links: [
      { title: "О нас", link: "/about" },
      { title: "Доставка и оплата", link: "/delivery-and-payment" },
      { title: "Политика конфиденциальности", link: "/privacy-policy" },
    ],
  },
  {
    title: "Служба поддержки",
    links: [
      { title: "Карта сайта", link: "/map" },
      { title: "Возврат товара", link: "/product-return" },
      { title: "Связаться с нами", link: "/contacts" },
      { title: "Для сотрудничества", link: "/for-cooperation" },
    ],
  },
  {
    title: "Личный кабинет",
    links: [
      { title: "Личный кабинет", link: "/profile" },
      { title: "История заказа", link: "/order-history" },
      { title: "Закладки", link: "/favourites" },
      { title: "Список новостей", link: "/news" },
    ],
  },
  {
    title: "Дополнительно",
    links: [
      { title: "Подарочные", link: "/present" },
      { title: "Сертификаты", link: "/certificates" },
      { title: "Акции", link: "/promotions" },
      { title: "Цветы в офис", link: "/flowers-for-office" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="pt-[32px] pb-[41px] bg-black text-white">
      <div className="container">
        <div className="border-b border-purple pb-[33px] flex justify-between">
          <Link to="/">
            <img src={logoIcon} alt="logo-white" />
          </Link>
          <nav className="flex gap-[93px] uppercase">
            {links.map((link) => (
              <div key={link.title} className="max-w-[210px]">
                <h3 className="mb-[38px] font-bold text-18 whitespace-nowrap">
                  {link.title}
                </h3>
                <ul className="pl-[5px] font-light leading-[18px] [&>:not(:last-child)]:mb-20">
                  {link.links.map((link) => (
                    <li key={link.link}>
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
