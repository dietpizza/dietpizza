import React, { type ReactNode } from "react";
import { cn } from "../../utils";

type SegmentProps = {
  children?: ReactNode;
  innerClasses?: string;
  outerClasses?: string;
  sepTop?: boolean;
  sepBottom?: boolean;
};

export const Segment: React.FC<SegmentProps> = ({
  children,
  innerClasses,
  outerClasses,
  sepBottom,
  sepTop,
}) => {
  return (
    <div
      className={cn(
        "flex justify-center border-border",
        outerClasses,
        sepTop && "border-t",
        sepBottom && "border-b",
      )}
    >
      <div
        className={cn(
          "flex border-l border-r border-border container ml-2 mr-2",
          innerClasses,
        )}
      >
        {children}
      </div>
    </div>
  );
};
