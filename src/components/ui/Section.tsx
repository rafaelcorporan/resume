import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 relative">
          <span className="relative z-10">{title}</span>
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-gray-800 dark:bg-gray-200"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;