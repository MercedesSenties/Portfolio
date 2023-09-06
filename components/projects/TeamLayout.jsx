import TeammateSingle from './TeammateSingle';

const TeamLayout = ({ title, teamList }) => {
  return (
    <div className="px-2 py-3 text-ternary-dark dark:text-ternary-light">
      <p className="font-general-medium text-lg md:text-xl lg:text-xl">
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {teamList.map((team, i) => {
          const { name, role, src } = team; 
          return (
            <TeammateSingle key={i} name={name} role={role} src={src} />
          );
        })}
      </div>
    </div>
  );
};

export default TeamLayout;
