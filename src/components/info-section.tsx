import React from "react";

import { Icon, Segment, SeparatorBlock } from "./ui";
import {
  CodeBracketIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type InfoItemProps = {
  link?: string;
  text: string;
  icon: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({ text, icon, link }) => {
  return (
    <div className="flex h-6 items-center gap-2">
      <Icon icon={icon} />
      {link ? (
        <a
          className="ml-1 font-mono text-sm hover:border-b border-text"
          href={link + text}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      ) : (
        <span className="ml-1 font-mono text-sm">{text}</span>
      )}
    </div>
  );
};

export const InfoSection: React.FC = () => {
  return (
    <>
      <Segment sepBottom innerStyle="p-4 flex-col gap-4">
        <InfoItem
          icon={<CodeBracketIcon />}
          text={"Mid-level Frontend/Android Developer"}
        />
        <InfoItem icon={<MapPinIcon />} text={"Kolkata, West Bengal, IND"} />
        <InfoItem icon={<PhoneIcon />} text={"+919330633793"} link="tel:" />
        <InfoItem
          icon={<EnvelopeIcon />}
          text={"imrohan550@gmail.com"}
          link="mailto:"
        />
      </Segment>
      <SeparatorBlock className="border-b" />
    </>
  );
};
