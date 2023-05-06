import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder27: "rounded-[27px]",
  icbRoundedBorder12: "rounded-[12px]",
  icbCircleBorder21: "rounded-[21px]",
  icbCircleBorder16: "rounded-[16px]",
  RoundedBorder5: "rounded-[5px]",
  RoundedBorder2: "rounded-sm",
  CircleBorder20: "rounded-[20px]",
};
const variants = {
  icbFillWhiteA700: "bg-white_A700",
  icbFillBlue800: "bg-blue_800",
  icbFillRed40001: "bg-red_400_01",
  icbFillIndigo500: "bg-indigo_500",
  icbFillLightblue500: "bg-light_blue_500",
  icbFillGreen500: "bg-green_500",
  FillBlue800: "bg-blue_800 text-white_A700",
  FillGreen50: "bg-green_50 text-green_700",
  OutlineBlue800:
    "bg-white_A700 border-2 border-blue_800 border-solid text-blue_800",
  FillWhiteA700: "bg-white_A700 text-gray_500_01",
  FillRed40001: "bg-red_400_01 text-white_A700",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  FillGreen500: "bg-green_500 text-white_A700",
};
const sizes = {
  smIcn: "p-1",
  mdIcn: "p-[9px]",
  lgIcn: "p-[13px]",
  sm: "p-1",
  md: "p-[9px]",
  lg: "p-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder27",
    "icbRoundedBorder12",
    "icbCircleBorder21",
    "icbCircleBorder16",
    "RoundedBorder5",
    "RoundedBorder2",
    "CircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "icbFillWhiteA700",
    "icbFillBlue800",
    "icbFillRed40001",
    "icbFillIndigo500",
    "icbFillLightblue500",
    "icbFillGreen500",
    "FillBlue800",
    "FillGreen50",
    "OutlineBlue800",
    "FillWhiteA700",
    "FillRed40001",
    "FillIndigo500",
    "FillGreen500",
  ]),
  size: PropTypes.oneOf(["smIcn", "mdIcn", "lgIcn", "sm", "md", "lg"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
