import React from 'react';
import Section from '../ui/Section';
import SkillBar from '../ui/SkillBar';
import { skillsData } from '../../data/resume-data';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
            <div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;