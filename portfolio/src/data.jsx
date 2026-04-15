import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import counter from '../src/assets/counter_2.png';
import pagination from '../src/assets/product_gallery.png'
import api_form from '../src/assets/form.png'

export const socialLinks = [
  {
    id: uuidv4(),
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mihir-dodeja-737627269/',
    icon: <FaLinkedin size={24} />,
  },
  {
    id: uuidv4(),
    platform: 'GitHub',
    url: 'https://github.com/mihirdodeja',
    icon: <FaGithub size={24} />,
  },
  {
    id: uuidv4(),
    platform: 'Vercel',
    url: 'https://vercel.com/mihirdodejas-vercel',
    icon: <FaGlobe size={24} />,
  }
];

export const skills = {
  technical: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Vite', level: 80 },
    { name: 'PHP', level: 60 },
    { name: 'Node.js', level: 65 },
    { name: 'MySQL', level: 75 },
    { name: 'MongoDB', level: 70 },
  ],
  tools: [
    { name: 'Git & GitHub' },
    { name: 'VS Code' },
    { name: 'Vercel' },
    { name: 'Netlify' },
  ],
  other: [
    { name: 'Problem Solving' },
    { name: 'Communication' },
    { name: 'Team Collaboration' },
  ]
};

export const projects = [
  {
    id: uuidv4(),
    title: 'Counter App',
    description: 'An interactive counter app with increment, decrement and reset functionality.',
    techStack: ['React', 'Vite'],
    category: 'React',
    image: counter,
    githubLink: 'https://github.com/mihirdodeja/react/tree/main/counter',
    liveLink: 'https://counterapp-react-reduxtoolkit.vercel.app/',
    features: ['Real-time increment-decrement', 'Vite+React', 'Redux Toolkit',],
  },
  {
    id: uuidv4(),
    title: 'Product Gallery using Pagination',
    description: 'User can view products in gallery form and can navigate through pages.',
    techStack: ['React', 'Vite'],
    category: 'React',
    image: pagination,
    githubLink: 'https://github.com/mihirdodeja/react/tree/main/pagination',
    liveLink: 'https://product-gallery-bymihir.vercel.app/',
    features: ['Pagination', 'Gallery View', 'Vite+React'],
  },
  {
    id: uuidv4(),
    title: 'React Form using API',
    description: 'A responsive form using API.',
    techStack: ['React', 'Vite'],
    category: 'React',
    image: api_form,
    githubLink: 'https://github.com/mihirdodeja/react/tree/main/api_form',
    liveLink: 'https://react-form-eosin-seven.vercel.app/',
    features: ['Form using API', 'CRUD Operation', 'Form Validation', 'Update and Delete'],
  }
];

export const experience = [
  {
    id: uuidv4(),
    company: 'Yellow Panther',
    role: 'PHP Developer Intern',
    duration: 'Nov 2024 - Dec 2024',
    description: 'Learnt PHP and MySQL at a intermediate level and applied those concepts in projects.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS']
  },
  {
    id: uuidv4(),
    company: 'Red & White Skill Education',
    role: 'Full Stack Developer',
    duration: 'June 2024 - Present',
    description: 'Collaborate with the web development team to build and maintain responsive frontend architectures. Assisted in backend API integration and improving website load times.',
    technologies: ['HTML5', 'CSS3', 'MediaQuery', 'BootStrap5', 'Javascript', 'React.js', 'Node.js', 'Express.js', 'MongoDB']
  }
];

export const education = [
  {
    id: uuidv4(),
    degree: 'Bachelor of Computer Applications',
    college: 'GLS University',
    year: '2023 - 2026',
  }
];
