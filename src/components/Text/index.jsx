import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[21px] md:text-[23px] text-[25px]",
  h2: "font-normal text-2xl md:text-[22px] sm:text-xl",
  h3: "font-bold text-[22px] sm:text-lg md:text-xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  body1: "text-[15px]",
  body2: "text-sm",
  body3: "text-[13px]",
  body4: "font-bold text-xs",
  body5: "font-medium text-[11px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
