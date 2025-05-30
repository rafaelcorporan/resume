import React from 'react';
import Section from '../ui/Section';
import ExperienceItem from '../ui/ExperienceItem';
import { experienceData } from '../../data/resume-data';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-3xl">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            company={item.company}
            position={item.position}
            duration={item.duration}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;