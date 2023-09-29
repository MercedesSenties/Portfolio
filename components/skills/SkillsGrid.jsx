import { useState } from "react";
import { skillsData } from "../../data/skillsData";
import SkillsSingle from "./SkillsSingle";

function SkillsGrid() {
  const [skills] = useState(skillsData);
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-2">
      {skills.map((skill) => (
        <SkillsSingle
          title={skill.title}
          image={skill.img}
          key={skill.id}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;
