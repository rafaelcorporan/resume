import { Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';

export const personalData = {
  name: "Alex Morgan",
  title: "Senior Product Designer",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  about: "I'm a product designer with 6+ years of experience creating digital experiences that are both beautiful and functional. I specialize in user-centered design approaches that drive business results while delighting users.",
  avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
  socialLinks: [
    {
      name: "Email",
      url: "mailto:alex@example.com",
      icon: Mail,
    },
    {
      name: "Github",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Website",
      url: "https://example.com",
      icon: Globe,
    },
  ],
};

export const experienceData = [
  {
    company: "Design Forward",
    position: "Senior Product Designer",
    duration: "2021 - Present",
    description: "Lead the product design for a SaaS platform serving 500k+ users. Collaborated with cross-functional teams to deliver user-centered design solutions. Established design system that improved team efficiency by 35%.",
  },
  {
    company: "Creative Solutions",
    position: "UI/UX Designer",
    duration: "2019 - 2021",
    description: "Designed and prototyped user interfaces for mobile and web applications. Conducted user research and usability testing to inform design decisions. Improved user engagement by 27% through UI redesign.",
  },
  {
    company: "TechStart Inc.",
    position: "Junior Designer",
    duration: "2017 - 2019",
    description: "Created wireframes and mockups for digital products. Collaborated with developers to ensure design implementation. Participated in user research and incorporated feedback into designs.",
  },
];

export const educationData = [
  {
    institution: "California Institute of Design",
    degree: "Master of Fine Arts, Interactive Design",
    duration: "2015 - 2017",
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Arts, Graphic Design",
    duration: "2011 - 2015",
  },
];

export const skillsData = [
  {
    category: "Design",
    skills: [
      { name: "UI/UX Design", level: 95 },
      { name: "Design Systems", level: 90 },
      { name: "User Research", level: 85 },
      { name: "Prototyping", level: 95 },
      { name: "Visual Design", level: 90 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Webflow", level: 80 },
      { name: "Framer", level: 75 },
    ],
  },
];

export const projectsData = [
  {
    title: "Finance App Redesign",
    description: "Complete redesign of a personal finance application, focusing on simplifying complex financial data visualization and improving user engagement.",
    imageUrl: "https://images.pexels.com/photos/7947772/pexels-photo-7947772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "Mobile", "Fintech"],
  },
  {
    title: "E-commerce Platform",
    description: "Designed user interface for an e-commerce platform with a focus on intuitive navigation and conversion optimization, resulting in 40% increase in sales.",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["UI/UX", "Web", "E-commerce"],
  },
  {
    title: "Health Tracking App",
    description: "Created a comprehensive design system and user interface for a health monitoring application, emphasizing accessibility and ease of use.",
    imageUrl: "https://images.pexels.com/photos/8439997/pexels-photo-8439997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Product Design", "Mobile", "Healthcare"],
  },
];