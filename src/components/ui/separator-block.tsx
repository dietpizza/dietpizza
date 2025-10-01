import React from "react";
import { cn, STRIPED_BG } from "../../utils";

type SeparatorBlockProps = {
  className?: string;
};

export const SeparatorBlock: React.FC<SeparatorBlockProps> = ({
  className,
}) => {
  return <div className={cn("border-border h-8", STRIPED_BG, className)} />;
};
