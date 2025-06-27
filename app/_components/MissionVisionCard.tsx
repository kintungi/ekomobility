import Icon from "../_lib/Icon";
import { IconType } from "../_lib/types";

function MissionVisionCard({
  name,
  icon,
  description,
  className,
}: {
  name: string;
  className?: string;
  icon: IconType;
  description: string;
}) {
  return (
    <div
      className={`bg-[#263F69] py-8 gap-8 px-8 rounded-2xl flex flex-col p-6 text-white ${className}`}
      // className={`bg-primary/50 py-8 gap-8 px-8 rounded-2xl flex flex-col p-6 text-white ${className}`}
    >
      <div className="flex items-center mb-4">
        <Icon variant={icon} />
      </div>
      <article className="max-w-[448px] flex flex-col gap-4">
        <h3 className="text-accent">{name}</h3>
        <p className="">{description}</p>
      </article>
    </div>
  );
}

export default MissionVisionCard;
