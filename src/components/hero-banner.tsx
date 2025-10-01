import React from "react";

import { Segment, SeparatorBlock } from "./ui";
import { cn, DOTTED_BG, STRIPED_BG } from "../utils";

import logo from "../assets/cat.svg";
import face from "../assets/face.jpg";
import { Typewriter } from "./ui/typewriter.tsx";

export const HeroBanner: React.FC = () => {
  return (
    <>
      <Segment
        innerStyle={cn(
          "relative items-center justify-center",
          "aspect-2/1 xs:aspect-2/1 sm:aspect-3/1",
        )}
        sepBottom
      >
        <img className="h-1/2 z-20" src={logo} alt="Logo" />
        <div className={cn("absolute h-full w-full", DOTTED_BG)} />
      </Segment>
      <Segment sepBottom innerStyle="h-40">
        <div className="h-full aspect-1/1 p-0.5">
          <div className="h-full w-full rounded-full border border-border overflow-hidden p-0.5">
            <img
              src={face}
              className="h-full w-full rounded-full"
              alt="My face lmao."
            />
          </div>
        </div>
        <div className="flex flex-col relative h-full w-full border-l border-border">
          <div
            className={cn(
              "flex flex-1 border-b border-border h-full w-full",
              STRIPED_BG,
            )}
          />
          <div className="flex items-center h-10 pl-4 border-b border-border">
            <span className="text-4xl font-semibold">Rohan Biswas</span>
          </div>
          <div className="flex items-center h-6 pl-4.5">
            <Typewriter
              text={[
                "Frontend Developer.",
                "Android Developer.",
                "OpenSource Contributor.",
              ]}
              speed={70}
              className="font-mono font-semibold text-sm"
              waitTime={2000}
              deleteSpeed={40}
              cursorChar={"_"}
              cursorAnimationVariants={{
                initial: { opacity: 1 },
                animate: { opacity: 1 },
              }}
            />
          </div>
        </div>
      </Segment>
      <SeparatorBlock className="border-b" />
    </>
  );
};
