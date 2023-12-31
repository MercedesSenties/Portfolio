import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";

function SkillsSingle({ title, image }) {
  return (
    <div className="py-5 px-5 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg">
      <Tooltip
        content={title}
        placement="bottom"
        className="bg-ternary-dark text-ternary-light dark:bg-card-light dark:text-ternary-dark">
        <a>
          <Image
            src={image}
            alt={title}
            width={40}
            height="auto"
          />
        </a>
      </Tooltip>
    </div>
  );
}

export default SkillsSingle;
