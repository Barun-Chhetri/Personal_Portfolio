import { Project, SkillCategory, Certificate, Education, SocialLink } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Barun Chhetri',
  fullName: 'Barun Ranjan Chhetri Chamlagain',
  label: 'FULL-STACK DEVELOPER · SOFTWARE ENGINEERING · AI',
  headline: 'Building the Web. Engineering What’s Next.',
  heroSubtext:
    'Hi, I’m Barun Chhetri — a Full-Stack Developer passionate about building useful applications, intelligent software, and impactful digital experiences.',
  aboutBio: [
    "I'm Barun Chhetri, a full-stack developer who enjoys turning ideas into practical software. I build web applications, explore AI-powered solutions, and continuously improve my problem-solving and engineering skills.",
    'My interests include full-stack development, application architecture, databases, artificial intelligence, generative AI, and cybersecurity.',
    'Currently pursuing a B.S. in Computer Science at the University of North Texas (GPA 3.85), I have hands-on experience building end-to-end data pipelines, RAG systems with PGVector, and production-grade full-stack web applications with Spring Boot, Next.js, and PostgreSQL.'
  ],
  email: 'barunchamlagain2004@gmail.com',
  location: 'Texas, USA',
  profileImage: '/images/profile.webp',
  profileFallback: '/images/profile.jpeg',
  availableForInternship: 'Available for Software Engineering & AI/ML Internships (Summer 2027)'
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Barun-Chhetri',
    icon: 'Github',
    username: 'Barun-Chhetri'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/Barun-Chhetri',
    icon: 'Linkedin',
    username: 'Barun-Chhetri'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/barunchhetri/',
    icon: 'Code2',
    username: 'barunchhetri'
  },
  {
    name: 'Email',
    url: 'mailto:barunchamlagain2004@gmail.com',
    icon: 'Mail',
    username: 'barunchamlagain2004@gmail.com'
  }
];

export const EDUCATION_DATA: Education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'University of North Texas',
  location: 'Denton, TX',
  gpa: '3.850 / 4.00',
  graduation: 'Expected May 2028',
  honors: [
    'Dean’s List – Tarrant County College (Spring 2025, Summer 2025, Fall 2025, Spring 2026)',
    'Dean’s List – University of South Dakota (Fall 2024)'
  ],
  involvement: [
    'Member, Mentors, Mindset, & Money: Intercultural Network (TCCD, Spring 2026)',
    'Active LeetCode algorithm problem solving and system design practice'
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'resume-analyzer',
    title: 'AI Resume Intelligence Platform',
    shortTitle: 'Resume Analyzer',
    tagline: 'Semantic ATS Matcher & Grounded Zero-Hallucination RAG Career Engine',
    description:
      'A production-grade AI platform engineered to bridge the gap between unstructured candidate resumes and enterprise job specs using 1536-dimensional PGVector embeddings and multi-stage semantic matching.',
    longDescription:
      'Engineered with Java 21, Spring Boot 3.4, Spring AI, PostgreSQL 16, and PGVector. Treats AI as a reliable module inside an audited data pipeline: deterministic ingestion (PDFBox/POI), 100+ canonical skill taxonomy normalization, 4-tier match confidence gates (Exact, Normalized, Alias, Cosine Similarity >= 0.65), and zero-hallucination RAG career guidance.',
    role: 'Full-Stack & AI Pipeline Architect',
    featured: true,
    liveUrl: 'https://resume-analyzer.barunchamlagain.me/',
    githubUrl: 'https://github.com/Barun-Chhetri/Resume_Analyzer',
    image: '/images/resume-analyzer.webp',
    category: 'Full-Stack / AI',
    tags: [
      'Java 21',
      'Spring Boot 3.4',
      'Spring AI',
      'PostgreSQL 16',
      'PGVector',
      'React 18',
      'Vite',
      'Docker',
      'Flyway',
      'RAG'
    ],
    metrics: [
      { label: 'Embedding Dimensions', value: '1536' },
      { label: 'Matching Tiers', value: '4 Levels' },
      { label: 'Similarity Threshold', value: '>= 0.65' },
      { label: 'Canonical Skills', value: '100+ Mapped' }
    ],
    keyHighlights: [
      'Multi-Format Deterministic Extraction: Apache PDFBox and Apache POI extract sections without token-wasting naive OCR.',
      '4-Tier Semantic Match Engine: Exact (1.00), Normalized (0.98), Alias (0.95), and Cosine Similarity (0.65 - 0.94).',
      'Critical vs Adjacent Gap Partitioning: Pinpoints critical missing tech while giving credit for adjacent foundations (e.g., Docker for Kubernetes).',
      'Grounded Zero-Hallucination RAG: Generates actionable XYZ-bullet improvements, project roadmaps, and target system design interview topics.'
    ],
    architecture: [
      'Frontend: React 18 SaaS dashboard with Glassmorphism and Lucide icons',
      'Backend: Spring Boot 3.4 REST API with Springdoc OpenAPI / Swagger',
      'Database: PostgreSQL 16 with PGVector HNSW indexes and Flyway schema migrations',
      'DevOps: Docker Compose multi-stage container builds with health checks'
    ]
  },
  {
    id: 'interview-crack-tracker',
    title: '180-Day SWE Interview Preparation Tracker',
    shortTitle: 'Interview Crack Tracker',
    tagline: 'Precision 180-Day Curriculum, Active Study Timer & Spaced-Repetition System',
    description:
      'A full-stack accountability and preparation platform built for Computer Science juniors targeting Summer 2027 Software Engineering internships, digitizing 180 study days and 900+ tasks.',
    longDescription:
      'Built with Next.js App Router, React, TypeScript, Tailwind CSS, PostgreSQL 16, and Prisma ORM. Features timestamp-based study timers that persist across page reloads and exclude pause time, smart carryover workload balancing with >3hr overload alerts, STAR behavioral bank, and automated Vitest verification (26 passing test scenarios).',
    role: 'Full-Stack Developer & Database Designer',
    featured: true,
    liveUrl: 'https://interview-crack.barunchamlagain.me/',
    githubUrl: 'https://github.com/Barun-Chhetri/interview-crack-tracker',
    image: '/images/interview-crack.webp',
    category: 'Full-Stack / Web',
    tags: [
      'Next.js 15',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL 16',
      'Prisma ORM',
      'BCrypt & JWT',
      'Vitest (26 Tests)',
      'Resend / SMTP'
    ],
    metrics: [
      { label: 'Curriculum Days', value: '180 Days' },
      { label: 'Target Hours', value: '540 Hours' },
      { label: 'Passing Tests', value: '26 / 26' },
      { label: 'Spaced Reviews', value: '6 Intervals' }
    ],
    keyHighlights: [
      'Persistent Timestamp Study Timer: Active timer survives reloads, exclusions for pauses, and logs sessions with an immutable audit trail.',
      'Partial Carryover Balancer: Carries over only remaining unfinished minutes (e.g. 15m remaining on a 60m task) with >3h daily overload warnings.',
      'STAR Behavioral Bank & CPT Checklist: Integrated behavioral story builder with confidence scoring and F-1 international student recruiting steps.',
      'Rock-Solid Security: Salted BCrypt password hashing (10 rounds), signed JWTs in HTTP-only SameSite cookies, and Prisma transactional integrity.'
    ],
    architecture: [
      'App Architecture: Next.js App Router with Server-Rendered layouts and Route Handlers',
      'ORM & Schema: Prisma ORM connected to PostgreSQL 16 with schema-enforced transactions',
      'Auth Engine: Custom stateless authentication with sliding window rate limiting',
      'Test Suite: Automated Vitest suite validating 26 rigorous calendar and carryover rules'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Programming',
    iconName: 'Code',
    skills: [
      { name: 'Java', level: 'Advanced', description: 'Java 21, Spring Boot, OOP, Collections, Multi-threading' },
      { name: 'Python', level: 'Proficient', description: 'Data pipelines, ML scripts, embeddings, ETL' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Asynchronous patterns, DOM, Modern ES Next' },
      { name: 'TypeScript', level: 'Proficient', description: 'Strict type safety, generics, interfaces' },
      { name: 'SQL', level: 'Advanced', description: 'Complex joins, aggregations, indexing, schema design' }
    ]
  },
  {
    title: 'Frontend Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 'Advanced', description: 'Hooks, context, state machines, component architecture' },
      { name: 'Next.js', level: 'Proficient', description: 'App router, server components, route handlers' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Responsive design, custom design tokens, dark mode' },
      { name: 'Three.js / 3D Canvas', level: 'Hands-on', description: 'Interactive 3D scenes, particle physics, web shaders' },
      { name: 'HTML5 & Modern CSS3', level: 'Advanced', description: 'Semantic HTML, Flexbox, CSS Grid, animations' }
    ]
  },
  {
    title: 'Backend & System Architecture',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot 3.4', level: 'Advanced', description: 'REST controllers, dependency injection, Spring Security' },
      { name: 'Node.js & Express', level: 'Proficient', description: 'Event-driven servers, middleware, REST APIs' },
      { name: 'REST API Integration', level: 'Advanced', description: 'OpenAPI / Swagger documentation, rate limiting' },
      { name: 'Prisma ORM & Flyway', level: 'Proficient', description: 'Database migrations, schema versioning' },
      { name: 'Authentication & Security', level: 'Proficient', description: 'BCrypt, JWT tokens, HTTP-only cookies, CORS' }
    ]
  },
  {
    title: 'AI, LLMs & Vector Databases',
    iconName: 'Cpu',
    skills: [
      { name: 'Generative AI & LLMs', level: 'Proficient', description: 'Architectures, fine-tuning concepts, context windows' },
      { name: 'Spring AI', level: 'Proficient', description: 'Embedding clients, prompt templates, structured output' },
      { name: 'PGVector & Vector Search', level: 'Advanced', description: '1536-dim embeddings, HNSW indexing, cosine similarity' },
      { name: 'RAG Architecture', level: 'Advanced', description: 'Chunking, retrieval, grounded zero-hallucination synthesis' },
      { name: 'Prompt Engineering', level: 'Advanced', description: 'Few-shot prompts, constraint-driven system prompts' }
    ]
  },
  {
    title: 'Databases, Cloud & DevOps',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL 16', level: 'Advanced', description: 'Relational modeling, transactions, JSONB, performance' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational querying, HackerRank certified' },
      { name: 'Docker & Docker Compose', level: 'Proficient', description: 'Multi-stage container builds, service orchestration' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Feature branching, code reviews, CI/CD workflows' },
      { name: 'Cybersecurity Fundamentals', level: 'Proficient', description: 'OWASP top 10, threat modeling, information security' }
    ]
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-ms-linkedin-genai',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    issuedDate: 'May 2026',
    credentialId: 'ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201',
    verificationUrl:
      'https://www.linkedin.com/learning/certificates/ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201',
    skills: ['Responsible AI', 'Prompt Engineering', 'Generative AI Concepts', 'AI Ethics'],
    icon: 'BrainCircuit',
    accentColor: '#0078d4'
  },
  {
    id: 'cert-google-llm',
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    issuedDate: 'May 2026',
    credentialId: '24175569',
    verificationUrl: undefined, // Public direct URL not configured by issuer
    skills: ['Large Language Models', 'Generative AI', 'Model Architectures', 'Google Cloud Skills'],
    icon: 'Sparkles',
    accentColor: '#ea4335'
  },
  {
    id: 'cert-hackerrank-sql',
    title: 'SQL (Basic) Certificate',
    issuer: 'HackerRank',
    issuedDate: 'May 2026',
    credentialId: 'B610B8D34CAD',
    verificationUrl: 'https://www.hackerrank.com/certificates/B610B8D34CAD',
    skills: ['SQL', 'MySQL', 'Relational Databases', 'Data Filtering & Query Optimization'],
    icon: 'Database',
    accentColor: '#00ea64'
  },
  {
    id: 'cert-linkedin-cybersecurity',
    title: 'Cybersecurity Foundations',
    issuer: 'LinkedIn',
    issuedDate: 'September 2026',
    credentialId: '1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5',
    verificationUrl:
      'https://www.linkedin.com/learning/certificates/1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5',
    skills: ['Cybersecurity', 'Information Security', 'Risk Management', 'Security Best Practices'],
    icon: 'ShieldCheck',
    accentColor: '#00a0dc'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Interactive Lab', href: '#playground' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' }
];
