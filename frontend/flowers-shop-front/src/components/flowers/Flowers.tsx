import { Dispatch, FC, SetStateAction } from "react";
import { IFlower, IResults } from "../../types/apiTypes";
import FlowerCard from "../flowerCard/FlowerCard";
import arrowLeftIcon from "../../assets/images/icons/arrow-left.svg";
import Skeleton from "../ui/skeleton/Skeleton";
import clsx from "clsx";

interface Props {
  title: string;
  offsetState: [number, Dispatch<SetStateAction<number>>];
  limitState: [number, Dispatch<SetStateAction<number>>] | number;
  isLoading: boolean;
  data?: IResults<IFlower>;
  className?: string;
}

const FlowerSkeleton: FC = () => (
  <div>
    <Skeleton width={336} height={304} rounded={1} />
    <div className="pt-[16px] pl-[26px] pr-[24px]">
      <Skeleton width={74} height={15} />
      <Skeleton width={286} height={45} className="mt-[13px] mb-[37px]" />
      <Skeleton width={190} height={62} className="mx-auto" />
      <Skeleton width={127} height={23} className="mt-[14px] mx-auto" />
    </div>
  </div>
);

const Flowers: FC<Props> = ({
  title,
  offsetState: [offset, setOffset],
  limitState,
  isLoading,
  data = { count: 0, results: [] },
  className = "",
}) => {
  const limit = typeof limitState === "number" ? limitState : limitState[0];

  return (
    <div className={clsx("text-center", className)}>
      <div className="flex justify-between">
        <div></div>
        <h2 className="leading-[92px]">{title}</h2>
        <div className="flex gap-[27px]">
          <button
            className="clickable"
            disabled={offset <= 0}
            onClick={() => setOffset((prev) => prev - limit)}
          >
            <img src={arrowLeftIcon} alt="arrow-left" />
          </button>
          <button
            className="clickable"
            disabled={offset + limit >= data.count}
            onClick={() => setOffset((prev) => prev + limit)}
          >
            <img src={arrowLeftIcon} alt="arrow-right" className="rotate-180" />
          </button>
        </div>
      </div>
      <div className="mt-[36px] grid grid-cols-4 gap-[20px]">
        {isLoading
          ? [...new Array(limit < 4 ? limit : 4)].map((_, key) => (
              <FlowerSkeleton key={key} />
            ))
          : data.results.map((flower) => (
              <FlowerCard key={flower.id} {...flower} />
            ))}
      </div>
    </div>
  );
};

export default Flowers;
