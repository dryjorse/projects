import { FC, useEffect, useState } from "react";
import Flowers from "../../components/flowers/Flowers";
import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import flowersService from "../../services/flowersService";

interface IFlowersQueryOptions {
  key: string;
  offset: number;
  limit: number;
  [key: string]: string | number | boolean;
}

const flowersOptions = ({
  key,
  offset,
  limit,
  ...options
}: IFlowersQueryOptions) =>
  queryOptions({
    queryKey: [key],
    queryFn: () =>
      flowersService.getAll({
        offset: offset,
        limit: limit,
        ...options,
      }),
    select: ({ data }) => data,
  });

const MainPage: FC = () => {
  const queryClient = useQueryClient();
  const promotionsOffsetState = useState(0);
  const seasonalOffsetState = useState(0);
  const flowersLimit = 8;

  const promotionsOptions = flowersOptions({
    key: "flowers-promotions",
    offset: promotionsOffsetState[0],
    limit: flowersLimit,
    is_promotion: true,
  });

  const seasonalOptions = flowersOptions({
    key: "flowers-seasonal",
    offset: seasonalOffsetState[0],
    limit: flowersLimit,
    is_seasonal: true,
  });

  const { data: flowersPromotions, isFetching: isPromotionsLoading } =
    useQuery(promotionsOptions);

  const { data: flowersSeasonal, isFetching: isSeasonalLoading } =
    useQuery(seasonalOptions);

  useEffect(() => {
    queryClient.prefetchQuery(promotionsOptions);
  }, [promotionsOffsetState[0]]);

  useEffect(() => {
    queryClient.prefetchQuery(seasonalOptions);
  }, [seasonalOffsetState[0]]);

  return (
    <div className="container pb-[85px]">
      <Flowers
        title="Акции"
        data={flowersPromotions}
        limitState={flowersLimit}
        isLoading={isPromotionsLoading}
        offsetState={promotionsOffsetState}
      />
      <Flowers
        title="Сезонные"
        className="mt-[140px]"
        data={flowersSeasonal}
        limitState={flowersLimit}
        isLoading={isSeasonalLoading}
        offsetState={seasonalOffsetState}
      />
    </div>
  );
};

export default MainPage;
