import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a 
            key={index}
            href={link.url}
            aria-label={link.name}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;