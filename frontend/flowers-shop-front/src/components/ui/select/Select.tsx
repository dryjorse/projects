import { FC } from "react";
import ReactSelect, { Props } from "react-select";
import clsx from "clsx";
import dropdownIcon from "../../../assets/images/icons/dropdown.svg";
import dropdownBlackIcon from "../../../assets/images/icons/dropdown-black.svg";
import searchIcon from "../../../assets/images/icons/search.svg";

interface CustomProps extends Props {
  styleType?: 1 | 2;
  controlClassName?: string;
  isSearch?: boolean;
  isInitialOnChange?: boolean;
  customOptions?: {
    options: any[] | undefined;
    labelKey: string;
  };
}

const styles = {
  1: {
    dropdownIndicator: () => ({ backgroundImage: `url(${dropdownBlackIcon})` }),
  },
  2: {
    dropdownIndicator: () => ({ backgroundImage: `url(${dropdownIcon})` }),
  },
};

const Select: FC<CustomProps> = ({
  styleType = 1,
  controlClassName = "",
  isSearch,
  customOptions,
  options,
  isInitialOnChange,
  ...props
}) => {
  const classNames = {
    1: {
      control: () =>
        clsx(
          "!rounded-none !border-l-0 !border-r-0 !border-t-0 !border-b !border-purple !shadow-none !cursor-pointer",
          controlClassName
        ),
    },
    2: {
      singleValue: () => "!text-purple",
    },
  };

  return (
    <ReactSelect
      options={
        customOptions
          ? customOptions.options
            ? customOptions.options.map((option) => ({
                // @ts-ignore
                value: option.id,
                // @ts-ignore
                label: option[customOptions.labelKey],
              }))
            : []
          : options
      }
      classNames={{
        control: () =>
          "!border-0 !bg-transparent !w-fit !shadow-none !cursor-pointer",
        menu: () =>
          "!w-fit !border !border-purple !shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)]",
        menuList: () => "!p-0 scroll-small",
        indicatorSeparator: () => "!hidden",
        valueContainer: () => "!p-0",
        dropdownIndicator: () =>
          "!py-[9px] !px-[11px] bg-no-repeat bg-center *:!hidden",
        ...classNames[styleType],
        option: (state) =>
          clsx("trans-def duration-[.13s] !cursor-pointer", {
            "!text-white !bg-purple": state.isSelected || state.isFocused,
            "!text-black": !state.isSelected && !state.isFocused,
            "opacity-50": state.isFocused,
            "font-bold": state.isSelected,
          }),
      }}
      styles={{
        ...styles[styleType],
        ...(isSearch
          ? {
              dropdownIndicator: () => ({
                backgroundImage: `url(${searchIcon})`,
              }),
            }
          : {}),
      }}
      {...props}
      onChange={(value) =>
        // @ts-ignore
        props.onChange(isInitialOnChange ? value : value.value)
      }
    />
  );
};

export default Select;
