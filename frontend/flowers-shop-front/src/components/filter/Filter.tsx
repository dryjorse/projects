import { FC, useCallback } from "react";
import Select from "../ui/select/Select";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import categoryService from "../../services/categoryService";
import { useAppDispatch } from "../../store/store";
import { setCategory } from "../../store/slices/flowersSlice";
import flowersService from "../../services/flowersService";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

const FIlter: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categoryService.getAll(),
    select: ({ data }) => data,
  });

  const { data: flowers, isFetching: isFlowersLoading } = useQuery({
    queryKey: ["flowers-search"],
    queryFn: () => flowersService.getAll(),
    select: ({ data }) => data.results,
  });

  const onChangeFlowersSearch = useCallback(
    debounce((value) => {
      queryClient.prefetchQuery({
        queryKey: ["flowers-search"],
        queryFn: () => flowersService.getAll({ search: value }),
      });
    }, 250),
    []
  );

  return (
    <div className="mb-[47px] flex gap-[21px]">
      <Select
        isLoading={isCategoriesLoading}
        placeholder="Поиск по категориям"
        controlClassName="min-w-[220px]"
        customOptions={{ options: categories, labelKey: "title" }}
        onChange={(value) => dispatch(setCategory(value as string))}
      />
      <Select
        isSearch
        value={null}
        className="w-[580px]"
        controlClassName="w-full"
        isLoading={isFlowersLoading}
        placeholder="Поиск по товарам"
        onInputChange={onChangeFlowersSearch}
        onChange={(id) => navigate(`/flowers/${id}`)}
        customOptions={{ options: flowers, labelKey: "title" }}
      />
    </div>
  );
};

export default FIlter;
