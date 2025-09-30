import { Segment } from "./ui";
import { cn, DOTTED_BG, STRIPED_BG } from "../utils";

import logo from "../assets/cat.svg";

export const HeroBanner: React.FC = () => {
  return (
    <>
      <Segment
        innerClasses={cn(
          "relative items-center justify-center",
          "aspect-2/1 xs:aspect-2/1 sm:aspect-3/1",
        )}
        sepBottom
      >
        <img className="h-1/2 z-20" src={logo} />
        <div className={cn("absolute h-full w-full", DOTTED_BG)} />
      </Segment>
      <Segment sepBottom innerClasses="relative">
        <div className={cn("absolute h-full w-full", STRIPED_BG)} />
        <div className="flex flex-col h-24"></div>
      </Segment>
    </>
  );
};
