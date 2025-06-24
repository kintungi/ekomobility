import React from "react";

function Pill({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-b w-max from-0% to-100% from-accent to-[#E16405] text-primary rounded-full h-10 px-8 grid place-items-center ${className}`}
    >
      <p className="font-medium">{children}</p>
    </div>
  );
}

export default Pill;
