import { LuExternalLink } from "react-icons/lu";

const TeammateSingle = ({ name, role, src }) => {
  return (
    <div className="bg-team-light dark:bg-team-dark shadow-lg rounded-lg py-2 px-4  text-ternary-dark dark:text-ternary-light">
      <div className="flex flex-row items-center place-content-between">
        <p className="font-general-medium text-base">{name}</p>
        {/* check if src is not empty, if it is, it doesn't render the icon*/}
        {src && (
          <a
            href={src}
            target="__blank">
            <LuExternalLink className="text-right text-lg hover:scale-125" />
          </a>
        )}
      </div>
      <p className="text-left font-general-light text-xs">{role}</p>
    </div>
  );
};

export default TeammateSingle;
