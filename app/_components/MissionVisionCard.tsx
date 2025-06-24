import Icon from "../_lib/Icon";
import { IconType } from "../_lib/types";

function MissionVisionCard({
  name,
  icon,
  description,
}: {
  name: string;
  icon: IconType;
  description: string;
}) {
  return (
    <div className="bg-accent py-[3rem] gap-8 px-8 rounded-2xl flex flex-col p-6 text-primary shadow-lg">
      <div className="flex items-center mb-4">
        <Icon variant={icon} />
      </div>
      <article>
        <h3 className="text-primary">{name}</h3>
        <p className="">{description}</p>
      </article>
    </div>
  );
}

export default MissionVisionCard;
