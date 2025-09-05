/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import Crewai from '@/components/technologies/Crewai';
import JavaScript from '@/components/technologies/JavaScript';
import LangGraph from '@/components/technologies/LangGraph';
import Langchain from '@/components/technologies/Langchain';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Pytorch from '@/components/technologies/Pytorch';
import ReactIcon from '@/components/technologies/ReactIcon';
import Fastapi from '@/components/technologies/Fastapi';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';





// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Pytorch: Pytorch,
  Langchain: Langchain,
  Crewai: Crewai,
  LangGraph: LangGraph,
  Fastapi: Fastapi,
};

export const heroConfig = {
  // Personal Information
  name: 'Mohit ',
  title: 'Full Stack & AI Product Developer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'Pytorch',
      href: 'https://pytorch.org/',
      component: 'Pytorch',
    },
    {
      name: 'Langchain',
      href: 'https://langchain.com/',
      component: 'Langchain',
    },
    {
      name: 'Crewai',
      href: 'https://crewai.org/',
      component: 'Crewai',
    },
    {
      name: 'LangGraph',
      href: 'https://langgraph.dev/',
      component: 'LangGraph',
    },
    {
      name: 'Fastapi',
      href: 'https://fastapi.tiangolo.com/',
      component: 'Fastapi',
    }
  ],

  // Description Configuration
  description: {
    template:
      '🔥 Crafting intelligent web apps with {skills:0} {skills:1} {skills:2} — powered by {skills:7} {skills:9} & {skills:8}.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'http://x.com/ByteMohit',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohit-goyal09',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/MohitGoyal09',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:mohitgoyal09042006@gmail.com',
    icon: <Mail />,
  },
];