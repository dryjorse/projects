import { FC } from "react";
import { IFlower } from "../../types/apiTypes";
import heartIcon from "../../assets/images/icons/heart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { currencyConverter } from "../../constants/utils";
import flowerIcon from "../../assets/images/icons/btn-flower.svg";

const FlowerCard: FC<IFlower> = ({
  images,
  discount_percentage,
  title,
  price,
  total_price,
}) => {
  const currency = useSelector((state: RootState) => state.flowers.currency);

  return (
    <div className="border border-purple rounded-[1px] w-[338px] h-[544px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)]">
      <div
        style={{ backgroundImage: `url(${images[0].image})` }}
        className="p-[6px_14px_27px_20px] [background-size:_90%] bg-no-repeat bg-center bg-light-gray h-[304px]"
      >
        <div className="flex justify-between">
          <div className="rounded-circle border border-dashed border-red w-[56px] h-[56px] flex justify-center items-center">
            -{discount_percentage}%
          </div>
          <button>
            <img src={heartIcon} alt="heart" className="w-[33px] h-[28px]" />
          </button>
        </div>
      </div>
      <div className="p-[16px_24px_14px_26px]">
        <div className="h-[15px]"></div>
        <div className="mt-[13px] mb-[37px] flex justify-between items-center text-start text-18">
          <span className="max-w-[200px] leading-[18px]">{title}</span>
          <div className="whitespace-nowrap">
            <span className="leading-[24px] lowercase text-gray-2 line-through">
              {currencyConverter(+price, currency.value)} {currency.label}
            </span>
            <strong className="leading-[18px] block lowercase font-bold text-purple">
              {currencyConverter(+total_price, currency.value)} {currency.label}
            </strong>
          </div>
        </div>
        <button className="btn">Заказать</button>
        <button className="mt-[14px] border-b border-purple p-[0.1px] clickable text-gray text-18 leading-[22px]">Быстрый заказ</button>
      </div>
    </div>
  );
};

export default FlowerCard;
