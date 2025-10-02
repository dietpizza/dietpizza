import React from "react";
import { cn, STRIPED_BG } from "../../utils";

type SeparatorBlockProps = {
  className?: string;
};

export const SeparatorBlock: React.FC<SeparatorBlockProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center border-border h-8",
        STRIPED_BG,
        className,
      )}
    >
      <div className="h-full container border-l border-r border-border" />
    </div>
  );
};
