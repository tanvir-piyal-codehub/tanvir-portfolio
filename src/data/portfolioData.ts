import gridwiseImg from '../assets/images/project_gridwise_preview_1790621159195.jpg';
import orderManagementImg from '../assets/images/project_c_order_management_1790621173337.jpg';
import treasureHunterImg from '../assets/images/project_treasure_hunter_dp_1790622725593.jpg';
import portfolioPreviewImg from '../assets/images/portfolio_tanvir_preview_1790622316236.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features?: string[];
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image: string;
  category: 'Hackathon' | 'Software Engineering' | 'Web Development';
  isFeatured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface ActivityItem {
  title: string;
  organization: string;
  period: string;
  badge: string;
  description: string;
  highlights: string[];
  projectLink?: string;
}

export interface CompetitivePlatform {
  name: string;
  platform: 'Codeforces' | 'LeetCode' | 'CodeChef' | 'GitHub';
  status: string;
  url?: string;
  description: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Md. Tanvir Hossain",
  role: "Computer Science & Engineering Student",
  university: "Daffodil International University",
  universityShort: "DIU",
  location: "Dhaka, Bangladesh",
  status: "2nd-year Undergraduate",
  email: "tanvir088033@gmail.com",
  github: "https://github.com/tanvir-piyal-codehub",
  linkedin: "https://www.linkedin.com/in/md-tanvir-hossain-48554b298",
  heroDescription:
    "I'm a CSE student passionate about programming, problem solving, software development, and building useful things with technology.",
  aboutParagraph1:
    "I'm currently pursuing a BSc in Computer Science & Engineering at Daffodil International University. I'm building my foundation in programming and computer science while exploring Data Structures & Algorithms, competitive programming, web development, and software engineering.",
  aboutParagraph2:
    "I genuinely enjoy learning by building projects and participating in technical competitions and hackathons. Whether it's crafting efficient C programs or developing modern interactive web applications, I thrive on tackling algorithmic challenges and collaborating with peers.",
  interests: [
    "Programming",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Competitive Programming",
    "Software Development",
    "Web Development",
    "Hackathons",
    "Problem Solving",
  ],
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages used for coursework, algorithms, and practical development",
    skills: [
      { name: "C", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "Python", level: "Foundational" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    category: "Computer Science",
    description: "Foundational theoretical and architectural concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: "Active Practice" },
      { name: "Object-Oriented Programming", level: "Coursework & Practice" },
      { name: "Problem Solving", level: "Daily Practice" },
      { name: "Database Fundamentals", level: "Academic Study" },
    ],
  },
  {
    category: "Web Development",
    description: "Building responsive frontends and web applications",
    skills: [
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
    ],
  },
  {
    category: "Tools",
    description: "Daily engineering and version control workflows",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration" },
      { name: "VS Code", level: "Primary IDE" },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "gridwise",
    title: "GridWise",
    tagline: "BUP CSE Fest Hackathon Project",
    description:
      "A hackathon project focused on solving the GridWise problem through an interactive web-based solution.",
    features: [
      "Interactive smart grid monitoring and telemetry visualization",
      "Dynamic node power distribution management interface",
      "API and AI integration for load balancing insights",
      "Responsive user interface built under hackathon time constraints",
    ],
    technologies: ["React", "JavaScript", "AI/API integration", "CSS3"],
    liveDemoUrl: "https://bup-hackathon-project.vercel.app/",
    githubUrl: "https://github.com/tanvir-piyal-codehub/GridWise",
    image: gridwiseImg,
    category: "Hackathon",
    isFeatured: true,
  },
  {
    id: "ecommerce-c-system",
    title: "E-Commerce Order Processing System",
    tagline: "Data Structures & Order Processing Engine in C",
    description:
      "A menu-driven C programming project for managing and processing customer e-commerce orders using structures (struct Order), arrays, real-time total sales calculation, and status updates.",
    features: [
      "Add new customer orders with unique tracking IDs, quantities, and pricing",
      "Display all structured order records in a formatted console table",
      "Search orders efficiently by unique Order ID",
      "Update order status dynamically (Pending, Processing, Completed)",
      "Delete order records and compute aggregate sales across active orders",
      "Menu-driven interactive CLI built for GCC and modern C compilers",
    ],
    technologies: ["C", "Data Structures", "Structs & Arrays", "CLI", "GCC"],
    githubUrl: "https://github.com/tanvir-piyal-codehub/E-Commerce-Order-Processing-System",
    image: orderManagementImg,
    category: "Software Engineering",
    isFeatured: true,
  },
  {
    id: "treasure-hunter-grid-dp",
    title: "Treasure Hunter: Grid DP Game",
    tagline: "Console Game & 2D Dynamic Programming in C",
    description:
      "A console-based Treasure Hunter game in C where a player collects treasure on a grid while avoiding obstacles, with Dynamic Programming used to compute and compare against the mathematically optimal score.",
    features: [
      "2D grid navigation engine starting at (0,0) down to (ROWS-1, COLS-1)",
      "Obstacle handling system ('X') and dynamic point accumulation (0–9)",
      "Dynamic programming recurrence: dp[r][c] = grid[r][c] + max(dp[r-1][c], dp[r][c-1])",
      "Real-time efficiency benchmark comparing player run vs. mathematically optimal path",
    ],
    technologies: ["C", "Dynamic Programming", "Algorithms", "2D Grid Math", "GCC"],
    githubUrl: "https://github.com/tanvir-piyal-codehub/treasure--hunter--grid--dp",
    image: treasureHunterImg,
    category: "Software Engineering",
    isFeatured: true,
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    tagline: "Modern Responsive Developer Showcase",
    description:
      "A responsive developer portfolio showcasing my projects, skills, education, and technical journey.",
    features: [
      "Interactive developer terminal IDE code window with live TypeScript syntax and copy functionality",
      "Fully responsive layout crafted for fluid navigation across mobile, tablet, and widescreen displays",
      "Data-driven modular architecture for easy maintenance and scaling of technical milestones",
      "Smooth section transitions, direct email communication flow, and accessible semantic markup",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveDemoUrl: "https://tanvir-portfolio-gttv.vercel.app",
    githubUrl: "https://github.com/tanvir-piyal-codehub/tanvir-portfolio",
    image: portfolioPreviewImg,
    category: "Web Development",
    isFeatured: true,
  },
];

export const COMPETITIVE_PLATFORMS: CompetitivePlatform[] = [
  {
    name: "Codeforces",
    platform: "Codeforces",
    status: "Profile coming soon",
    description: "Practicing problem-solving, implementation, and greedy algorithms in Div. 3 and Div. 4 rounds.",
    iconName: "Binary",
  },
  {
    name: "LeetCode",
    platform: "LeetCode",
    status: "Profile coming soon",
    description: "Practicing core Data Structures: Arrays, Linked Lists, Trees, Two Pointers, and Binary Search.",
    iconName: "Code2",
  },
  {
    name: "CodeChef",
    platform: "CodeChef",
    status: "Profile coming soon",
    description: "Participating in graded challenges to enhance speed and math/logic accuracy under time constraints.",
    iconName: "Terminal",
  },
  {
    name: "GitHub",
    platform: "GitHub",
    status: "tanvir-piyal-codehub",
    url: "https://github.com/tanvir-piyal-codehub",
    description: "Hosting course repositories, algorithmic experiments, hackathon source code, and web builds.",
    iconName: "Github",
  },
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    title: "BUP CSE Fest / Hackathon",
    organization: "Bangladesh University of Professionals (BUP)",
    period: "Recent Event",
    badge: "Hackathon Participant",
    description:
      "Participated in the university hackathon and collaborated with teammates to develop the GridWise project under competitive hackathon pressure.",
    highlights: [
      "Brainstormed smart energy and grid optimization solution",
      "Built interactive React front-end and dynamic UI components",
      "Integrated APIs for data simulation and presented live solution to evaluators",
    ],
    projectLink: "https://bup-hackathon-project.vercel.app/",
  },
  {
    title: "University Programming Contests",
    organization: "Daffodil International University",
    period: "Ongoing Activity",
    badge: "Competitive Programming",
    description:
      "Active participant in intra-university programming contests and mock algorithmic rounds to sharpen problem-solving and time-management skills.",
    highlights: [
      "Solving algorithmic problems using C and C++",
      "Strengthening fundamentals in time/space complexity analysis",
      "Collaborating with department peers in campus coding community",
    ],
  },
  {
    title: "Hult Prize Activity",
    organization: "Hult Prize DIU On-Campus",
    period: "Activity & Ideation",
    badge: "Social Innovation & Teamwork",
    description:
      "Engaged in technical ideation and collaborative problem-solving sessions tackling sustainable development and community-focused challenges.",
    highlights: [
      "Explored scalable technology concepts for real-world impact",
      "Honed project presentation, teamwork, and communication skills",
    ],
  },
];

export const EDUCATION_DATA = {
  institution: "Daffodil International University",
  degree: "BSc in Computer Science & Engineering",
  location: "Dhaka, Bangladesh",
  status: "2nd-Year Undergraduate Student",
  period: "2024 — Present",
  academicFocus: [
    "Data Structures & Algorithms (C / C++)",
    "Object-Oriented Programming (OOP)",
    "Structured Programming Language (SPL)",
    "Discrete Mathematics",
    "Database Management Systems (DBMS)",
    "Computer Architecture Fundamentals",
  ],
  summary:
    "Building a rigorous theoretical and applied foundation in computer science, focusing on clean algorithmic thinking, software engineering practices, and hands-on lab projects.",
};

export const CURRENTLY_LEARNING_DATA = [
  {
    topic: "Data Structures & Algorithms",
    focus: "Recursion, Trees, Graphs, Sorting Algorithms, Time Complexity",
    status: "Daily Problem Solving",
    color: "from-teal-500/20 to-emerald-500/10",
    border: "border-teal-500/30",
  },
  {
    topic: "Competitive Programming",
    focus: "C++ STL, Number Theory, Two Pointers, Contest Strategy",
    status: "Active Contest Participation",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
  },
  {
    topic: "Git & GitHub",
    focus: "Branching strategies, Merge conflicts, Collaborative workflows, Open Source",
    status: "Regular Project Commits",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
  },
  {
    topic: "Web Development",
    focus: "Modern React patterns, TypeScript, Tailwind CSS, REST APIs",
    status: "Building Hands-on Apps",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
  },
  {
    topic: "Software Engineering",
    focus: "Clean code principles, Modular architecture, Debugging, Documentation",
    status: "Coursework & Practice",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/30",
  },
  {
    topic: "Problem Solving",
    focus: "Analytical thinking, Edge-case identification, Optimization",
    status: "Continuous Growth",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
  },
];
