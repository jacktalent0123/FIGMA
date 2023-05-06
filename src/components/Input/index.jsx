import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  FillBlue800: "bg-blue_800",
  FillWhiteA700: "bg-white_A700",
  srcFillWhiteA700: "bg-white_A700",
};
const shapes = {
  CustomBorderTL5:
    "rounded-bl-none rounded-br-none rounded-tl-[5px] rounded-tr-[5px]",
  RoundedBorder5: "rounded-[5px]",
  srcRoundedBorder5: "rounded-[5px]",
};
const sizes = { sm: "p-[11px]", md: "px-3 py-[13px]", smSrc: "px-[7px] py-2" };

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,

      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "CustomBorderTL5",
    "RoundedBorder5",
    "srcRoundedBorder5",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue800",
    "FillWhiteA700",
    "srcFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smSrc"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
