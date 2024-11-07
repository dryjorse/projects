import { FC } from "react";
import Select from "../ui/select/Select";
import { setCurrency } from "../../store/slices/flowersSlice";
import { useAppDispatch } from "../../store/store";
import { Link, NavLink } from "react-router-dom";
import Filter from "../filter/Filter";
import heartIcon from "../../assets/images/icons/heart.svg";
import deliveryIcon from "../../assets/images/icons/delivery.svg";
import phoneIcon from "../../assets/images/icons/phone.svg";
import personIcon from "../../assets/images/icons/person.svg";
import logoIcon from "../../assets/images/icons/logo.svg";
import viberIcon from "../../assets/images/icons/viber.svg";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import telegramIcon from "../../assets/images/icons/telegram.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import cartIcon from "../../assets/images/icons/cart.svg";
import { ICurrency } from "../../types/clientTypes";

const menuList = [
  {
    label: "Валюта",
    select: {
      options: [
        { label: "Грн", value: "uah" },
        { label: "Сом", value: "som" },
        { label: "Руб", value: "rub" },
      ],
      action: setCurrency,
    },
  },
  {
    label: "Закладки",
    icon: heartIcon,
    link: "/favourites",
  },
  {
    label: "Доставка и оплата",
    icon: deliveryIcon,
    link: "/delivery-and-payment",
  },
  {
    label: "Контакты",
    icon: phoneIcon,
    link: "/contacts",
  },
];

const secondMenuList = [
  { label: "Каталог товаров", link: "/catalog" },
  { label: "Форум", link: "/forum" },
  { label: "Отзывы", link: "/reviews" },
  { label: "Акции", link: "/promotions" },
  { label: "Новости", link: "/news" },
  { label: "Информация", link: "/info" },
];

const Header: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <div className="pt-[14px] pb-[16px] bg-black font-light text-white">
        <div className="container flex justify-between">
          <nav className="flex gap-[64px] items-center">
            {menuList.map((list) =>
              list.select ? (
                <div key={list.label} className="flex gap-[14px] items-center">
                  <span>{list.label}</span>
                  <Select
                    styleType={2}
                    isInitialOnChange
                    options={list.select.options}
                    defaultValue={list.select.options[0]}
                    onChange={(value) =>
                      dispatch(list.select.action(value as ICurrency))
                    }
                  />
                </div>
              ) : (
                <Link
                  key={list.label}
                  to={list.link}
                  className="flex gap-[14px] items-center"
                >
                  <img src={list.icon} alt="menu-icon" />
                  <span>{list.label}</span>
                </Link>
              )
            )}
          </nav>
          <div className="flex items-center leading-[18px]">
            <img src={personIcon} alt="person" className="mr-10" />
            <button>Вход</button>
            <div className="mx-[6px] w-[1px] bg-purple h-[14px]"></div>
            <button>Регистрация</button>
          </div>
        </div>
      </div>
      <div className="container pt-[28px] pb-[53px] flex justify-between">
        <Link to="/">
          <img src={logoIcon} alt="logo" />
        </Link>
        <div>
          <Filter />
          <nav className="flex justify-between items-center">
            {secondMenuList.map((list) => (
              <NavLink
                to={list.link}
                key={list.label}
                className="font-bold text-[18px] leading-[18px] trans-def hover:text-purple [&.active]:text-purple"
              >
                {list.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div>
          <ul className="flex justify-end gap-[13px] items-center">
            <li>
              <a
                href=""
                target="_blank"
                className="rounded-circle w-[26px] h-[26px] flex justify-center items-center bg-purple"
              >
                <img src={viberIcon} alt="viber" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="rounded-circle w-[26px] h-[26px] flex justify-center items-center bg-purple"
              >
                <img src={instagramIcon} alt="instagram" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="rounded-circle w-[26px] h-[26px] flex justify-center items-center bg-purple"
              >
                <img src={telegramIcon} alt="telegram" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
                className="rounded-circle w-[26px] h-[26px] flex justify-center items-center bg-purple"
              >
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
          </ul>
          <a
            href="tel:+380678293030"
            className="block mt-[19px] mb-[22px] text-18 leading-[18px]"
          >
            +38 (067) 829 30 30
          </a>
          <div className="flex justify-end items-center">
            <Link to="/favourites">
              <img src={heartIcon} alt="heart" className="w-[33px] h-[29px]" />
            </Link>
            <Link to="/basket" className="ml-[19px] mr-[13px]">
              <img src={cartIcon} alt="heart" className="w-[33px] h-[29px]" />
            </Link>
            <span className="text-gray">₴ 1 520</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
