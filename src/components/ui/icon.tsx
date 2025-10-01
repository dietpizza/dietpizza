import React from "react";

type IconProps = {
  size?: number;
  icon: React.ReactNode;
};

export const Icon: React.FC<IconProps> = ({ size, icon }) => {
  return (
    <div className={`h-6 w-6 p-1 border-border border rounded-md ${size}`}>
      {icon}
    </div>
  );
};
