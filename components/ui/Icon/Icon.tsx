import React from "react";

const styleType = {
  outlined: "material-icons-outlined",
  filled: "material-icons",
};

const sizeIcon = {
  xs: "!text-xs",
  sm: "!text-sm",
  md: "!text-base",
  lg: "!text-lg",
  xl: "!text-xl",
  "2xl": "!text-2xl",
  "3xl": "!text-3xl",
  "4xl": "!text-4xl",
}

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: string;
  type?: keyof typeof styleType;
  size?: keyof typeof sizeIcon;
}

const Icon: React.FC<Props> = ({ icon, type = "filled", size="lg", children, className, ...props }) => {
  const classNameAttr = `${styleType[type]} ${sizeIcon[size]} ${className || ""}`;
  return (
    <span className={classNameAttr} {...props}>
      {children || icon}
    </span>
  );
};

export default Icon;