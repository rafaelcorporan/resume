import React from 'react';
import Section from '../ui/Section';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/resume-data';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;