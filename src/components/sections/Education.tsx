import React from 'react';
import Section from '../ui/Section';
import EducationItem from '../ui/EducationItem';
import { educationData } from '../../data/resume-data';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl">
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            institution={item.institution}
            degree={item.degree}
            duration={item.duration}
          />
        ))}
      </div>
    </Section>
  );
};

export default Education;