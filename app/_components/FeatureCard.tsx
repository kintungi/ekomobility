import React from "react";
import { IconType } from "../_lib/types";
import Icon from "../_lib/Icon";

function FeatureCard({
  title,
  description,
  bullets,
  icon,
  variant = 1,
  className,
}: {
  title: string;
  icon: IconType;
  description: string;
  bullets?: string[];
  variant?: 1 | 2 | 3;
  className?: string;
}) {
  if (variant === 1)
    return (
      <div
        className={`w-full md:max-w-[320px] flex flex-col gap-4 p-8 bg-[rgba(145,142,138,0.2)] border border-[rgba(255,255,255,0.15)] rounded-2xl ${className}`}
        // className={`w-full md:max-w-[320px] flex flex-col gap-4 p-8 bg-[rgba(145,142,138,0.2)] border border-[rgba(255,255,255,0.15)] rounded-2xl ${className}`}
        // className={`w-full md:max-w-[320px] shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.2),inset_0_-4px_8px_0_rgba(255,255,255,0.2)] flex flex-col gap-4 p-8 bg-[rgba(145,142,138,0.2)] rounded-2xl ${className}`}
      >
        <div className="bg-[rgba(247,148,32,0.15)] grid place-items-center text-white rounded-full w-[72px] h-[72px]">
          <Icon variant={icon} />
        </div>
        <h3>{title}</h3>
        <p className="text-secondary">{description}</p>
        <ul className="text-secondary list-inside list-disc">
          {bullets && bullets.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );

  if (variant === 2)
    return (
      <div
        className={`lg:max-w-[320px] w-full bg-[#F8F6F3] border border-primary/10 flex flex-col gap-4 p-4  rounded-2xl ${className}`}
        // className={`lg:max-w-[320px] w-full shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.2),inset_0_-4px_8px_0_rgba(255,255,255,0.2)] flex flex-col gap-4 p-4 bg-accent/20 rounded-2xl ${className}`}
      >
        <div className="bg-[rgba(247,148,32,0.15)] grid place-items-center text-white rounded-full w-[72px] h-[72px]">
          <Icon variant={icon} />
        </div>
        <h3>{title}</h3>
        <p className="text-primary">{description}</p>
        <ul className="text-secondary list-inside list-disc">
          {bullets && bullets.map((item, i) => <li>{item}</li>)}
        </ul>
      </div>
    );
  if (variant === 3)
    return (
      <div
        className={`max-w-[320px]  flex flex-col items-center gap-4 p-8  rounded-2xl ${className}`}
      >
        <div className="bg-[rgba(255,255,255,0.2)] grid place-items-center text-white rounded-full w-[72px] h-[72px]">
          <Icon variant={icon} />
        </div>
        <h3 className="text-center">{title}</h3>
        <p className="text-secondary text-center">{description}</p>
        <ul className="text-secondary list-inside list-disc">
          {bullets && bullets.map((item, i) => <li>{item}</li>)}
        </ul>
      </div>
    );
  return null;
}

export default FeatureCard;
