import React from "react";

const styleType = {
  outlined: "material-icons-outlined",
  filled: "material-icons",
};

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: string;
  type?: keyof typeof styleType;
}

export const Icon: React.FC<Props> = ({ icon, type = "filled", children, ...props }) => {
  const className = styleType[type] + " " + (props.className || "");
  return (
    <span className={className} {...props}>
      {children || icon}
    </span>
  );
};
