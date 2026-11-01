import { Project, SkillCategory, Certificate, Education, SocialLink } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Barun Chhetri',
  fullName: 'Barun Ranjan Chhetri Chamlagain',
  label: 'FULL-STACK · DATA ACQUISITION · AI/ML',
  headline: 'Building the Web. Engineering Data & AI Pipelines.',
  heroSubtext:
    'Hi, I’m Barun Chhetri — a Computer Science student at UNT with hands-on experience in data acquisition, data ingestion, full-stack architecture, and grounded AI systems with Spring Boot, Next.js, and PGVector.',
  aboutBio: [
    "I'm Barun Chhetri, a Computer Science student at the University of North Texas with hands-on experience in data acquisition, data ingestion, and data reconciliation, building full-stack applications and data pipelines with Java, Spring Boot, Python, SQL, React, Next.js, PostgreSQL, and PGVector.",
    'I specialize in document parsing, text normalization, embedding-based entity resolution, semantic search, Retrieval-Augmented Generation (RAG), and REST API integration. I have demonstrated experience turning messy, incomplete data into structured, reliable outputs, backed by comprehensive unit/integration testing and Docker deployment.',
    'Seeking a Data Acquisition Engineer or Software Engineering / AI-ML internship starting May 2027. Currently maintaining a 3.850 GPA at UNT with Dean’s List honors across Tarrant County College and University of South Dakota.'
  ],
  email: 'barunchamlagain2004@gmail.com',
  phone: '(817) 456-5426',
  location: 'Keller, TX',
  resumeUrl: '/Barun_Chhetri_Resume_2026_Updated.pdf',
  profileImage: '/images/profile.webp',
  profileFallback: '/images/profile.jpeg',
  availableForInternship: 'Seeking Data Acquisition Engineer or Software Engineering / AI-ML Internship (May 2027)'
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
    'Member, Mentors, Mindset, & Money: Intercultural Network, TCCD (Spring 2026)',
    'Data acquisition pipelines, document parsing, vector search & LeetCode problem solving'
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'resume-analyzer',
    title: 'AI Resume Intelligence Platform',
    shortTitle: 'Resume Intelligence Platform',
    tagline: 'Data Acquisition, 4-Tier Entity Resolution & Grounded Zero-Hallucination RAG Engine',
    description:
      'A full-stack data acquisition and ingestion platform reconciling unstructured resumes (PDF, DOCX, TXT) and job postings into a searchable PostgreSQL/PGVector knowledge base using Apache PDFBox, Apache POI, and Spring AI.',
    longDescription:
      'Engineered with Java 21, Spring Boot, Spring AI, PostgreSQL, PGVector, React, and Docker. Implements a 4-tier entity resolution and skill-matching engine (exact, normalized, alias, and cosine-similarity semantic search on 1536-dimensional embeddings) backed by a canonical taxonomy of 100+ skills and an alias table, so variants like "AWS" and "Amazon Web Services" resolve to one entity. Features skill-gap analysis that separates critical from preferred gaps and surfaces adjacent evidence, plus grounded Retrieval-Augmented Generation (RAG) recommendations constrained to verified resume content to prevent fabricated experience. Managed with Flyway schema migrations, HNSW vector indexes, OpenAPI/Swagger docs, unit & MockMvc integration tests, and Docker Compose.',
    role: 'Full-Stack & Data Pipeline Architect',
    featured: true,
    liveUrl: 'https://resume-analyzer.barunchamlagain.me/',
    githubUrl: 'https://github.com/Barun-Chhetri/Resume_Analyzer',
    image: '/images/resume-analyzer.webp',
    category: 'Full-Stack / AI',
    tags: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'PostgreSQL',
      'PGVector',
      'React',
      'Docker',
      'Apache PDFBox',
      'Apache POI',
      'Flyway',
      'OpenAPI / Swagger',
      'MockMvc',
      'RAG'
    ],
    metrics: [
      { label: 'Embedding Dimensions', value: '1536' },
      { label: 'Resolution Engine', value: '4 Tiers' },
      { label: 'Similarity Gate', value: '>= 0.65' },
      { label: 'Canonical Skills', value: '100+ Mapped' }
    ],
    keyHighlights: [
      'Data Acquisition & Ingestion: Built full-stack platform for multi-format extraction of resumes (PDF, DOCX, TXT) and job postings into PostgreSQL/PGVector with Apache PDFBox and Apache POI.',
      '4-Tier Entity Resolution Engine: Exact, normalized, alias table (resolves "AWS" and "Amazon Web Services" to one entity), and cosine-similarity search on 1536D embeddings.',
      'Grounded Zero-Hallucination RAG: Separates critical from preferred gaps, surfaces adjacent evidence, and constrains RAG guidance strictly to verified resume content.',
      'Robust DevOps & Architecture: Managed schema via Flyway migrations and HNSW vector indexes, documented REST API with OpenAPI/Swagger, unit & MockMvc tests, and Docker Compose.'
    ],
    architecture: [
      'Data Ingestion: Apache PDFBox and Apache POI deterministic document text extraction',
      'Backend & AI: Java 21 & Spring Boot REST API with Spring AI embedding generation',
      'Database: PostgreSQL 16 with PGVector HNSW vector indexing and Flyway migrations',
      'DevOps & Testing: Docker Compose containerization, OpenAPI/Swagger, JUnit & MockMvc tests'
    ]
  },
  {
    id: 'interview-crack-tracker',
    title: '180-Day Interview Prep Tracker',
    shortTitle: 'Interview Prep Tracker',
    tagline: 'PDF Handbook Ingestion, 965 Spaced Reviews & Database Transactional Study Timer',
    description:
      'A full-stack, deployed web application that turns a 180-day study handbook into 900 tasks and 965 spaced-repetition review intervals, parsed from a PDF and seeded into PostgreSQL via Prisma.',
    longDescription:
      'Built with Next.js 16, React 19, TypeScript, Prisma ORM, PostgreSQL, and Docker. Implements a timestamp-based study timer that survives page refreshes and excludes pause time, partial task carryover with undo and duplicate prevention wrapped in database transactions, and daily/weekly/monthly reports emailed via Resend or SMTP. Secured with salted BCrypt password hashing, signed JWTs in HTTP-only cookies, login rate limiting, single-use password-reset tokens, per-user data isolation, and verified with a 26-scenario Vitest test suite.',
    role: 'Full-Stack Developer & Database Architect',
    featured: true,
    liveUrl: 'https://interview-crack.barunchamlagain.me/',
    githubUrl: 'https://github.com/Barun-Chhetri/interview-crack-tracker',
    image: '/images/interview-crack.webp',
    category: 'Full-Stack / Web',
    tags: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma ORM',
      'Docker',
      'BCrypt & JWT',
      'Vitest (26 Tests)',
      'Resend / SMTP'
    ],
    metrics: [
      { label: 'Curriculum Tasks', value: '900 Tasks' },
      { label: 'Spaced Reviews', value: '965 Intervals' },
      { label: 'Vitest Tests', value: '26 / 26' },
      { label: 'Study Program', value: '180 Days' }
    ],
    keyHighlights: [
      'PDF Parsing & Database Seeding: Digested a 180-day study handbook into 900 structured tasks and 965 spaced-repetition review intervals seeded into PostgreSQL via Prisma.',
      'Persistent Timestamp Study Timer: Survives page refreshes, automatically excludes pause periods, and logs verified study sessions.',
      'Transactional Partial Carryover: Carries over remaining minutes with undo and duplicate prevention wrapped in database transactions; generates daily/weekly/monthly email reports.',
      'Hardened Security Architecture: BCrypt password hashing, signed HTTP-only JWT cookies, login rate limiting, single-use password-reset tokens, and per-user data isolation.'
    ],
    architecture: [
      'App Architecture: Next.js 16 App Router & React 19 with Server Components & Route Handlers',
      'ORM & Schema: Prisma ORM with PostgreSQL database transactions for atomic state mutations',
      'Security: HTTP-only signed JWT cookies, BCrypt hashing, login rate limiting & data isolation',
      'Test Suite: Automated 26-scenario Vitest verification suite and Docker containerization'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Programming',
    iconName: 'Code',
    skills: [
      { name: 'Java (Java 21)', level: 'Advanced', description: 'Spring Boot, OOP design, Collections framework, Multi-threading' },
      { name: 'Python', level: 'Proficient', description: 'Data pipelines, ETL scripting, embeddings generation, automation' },
      { name: 'SQL', level: 'Advanced', description: 'PostgreSQL, complex joins, aggregations, HNSW indexing, schema design' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Asynchronous patterns, DOM APIs, event loop, Modern ES Next' },
      { name: 'TypeScript', level: 'Proficient', description: 'Strict typing, generics, interfaces, Next.js type safety' }
    ]
  },
  {
    title: 'Data Acquisition & AI Pipelines',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Acquisition & Ingestion', level: 'Advanced', description: 'Multi-format PDF, DOCX, TXT document parsing with Apache PDFBox and Apache POI' },
      { name: 'Entity Resolution & Normalization', level: 'Advanced', description: '4-tier matching engine (Exact, Normalized, Alias table, Cosine similarity)' },
      { name: 'PGVector & Vector Search', level: 'Advanced', description: '1536-dimensional embeddings, HNSW vector indexes, cosine distance queries' },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 'Advanced', description: 'Grounded, zero-hallucination career guidance constrained to verified resume content' },
      { name: 'Semantic Search & Vector DBs', level: 'Advanced', description: 'High-dimensional similarity matching, canonical skill taxonomy of 100+ entities' },
      { name: 'Generative AI & LLMs', level: 'Proficient', description: 'Spring AI embedding clients, prompt engineering, structured JSON outputs' },
      { name: 'ETL & Data Pipelines', level: 'Proficient', description: 'Automated document extraction, data reconciliation, seeding PostgreSQL via Prisma' },
      { name: 'Machine Learning & Deep Learning', level: 'Proficient', description: 'Foundational ML concepts, transformer embeddings, semantic similarity scoring' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Layout',
    skills: [
      { name: 'Spring Boot', level: 'Advanced', description: 'REST controllers, dependency injection, service layers, application config' },
      { name: 'Spring AI', level: 'Proficient', description: 'Embedding generation, vector store integration, structured prompt templates' },
      { name: 'React (React 18 / 19)', level: 'Advanced', description: 'Modern hooks, component architecture, state management, interactive UI' },
      { name: 'Next.js (Next.js 16)', level: 'Proficient', description: 'App router, Server Components, Route Handlers, SSR/SSG rendering' },
      { name: 'Apache PDFBox & Apache POI', level: 'Advanced', description: 'Deterministic PDF, DOCX, and text extraction for unstructured resume ingestion' },
      { name: 'Prisma ORM', level: 'Proficient', description: 'Type-safe schema modeling, database transactions, automated migrations' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Responsive design tokens, glassmorphism, dark theme, interactive CSS' }
    ]
  },
  {
    title: 'Backend, Databases & Security',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', description: 'Relational data modeling, ACID transactions, JSONB, PGVector extensions' },
      { name: 'Flyway Migrations', level: 'Proficient', description: 'Versioned schema migrations, automated database updates in CI/CD' },
      { name: 'REST API & OpenAPI / Swagger', level: 'Advanced', description: 'RESTful endpoints, request validation, interactive Swagger documentation' },
      { name: 'JWT Authentication & BCrypt', level: 'Proficient', description: 'Salted password hashing, signed HTTP-only cookies, rate limiting, data isolation' },
      { name: 'System Architecture', level: 'Proficient', description: 'Data reconciliation pipelines, atomic carryover transactions, service boundaries' }
    ]
  },
  {
    title: 'Tools, DevOps & Testing',
    iconName: 'Server',
    skills: [
      { name: 'Docker & Docker Compose', level: 'Proficient', description: 'Multi-stage container builds, multi-service orchestration, volume management' },
      { name: 'Unit & Integration Testing', level: 'Advanced', description: 'JUnit, MockMvc integration testing, Vitest (26-scenario suite)' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Feature branching, pull requests, commit hygiene, automated workflows' },
      { name: 'Amazon Web Services (AWS)', level: 'Proficient', description: 'Cloud infrastructure foundations, compute, storage, and cloud deployments' }
    ]
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-google-llm',
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    issuedDate: 'May 2026',
    credentialId: '24175569',
    verificationUrl: undefined,
    skills: ['Large Language Models', 'Generative AI', 'Model Architectures', 'Google Cloud Skills'],
    icon: 'Sparkles',
    accentColor: '#ea4335'
  },
  {
    id: 'cert-linkedin-intro-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'LinkedIn',
    issuedDate: 'September 2026',
    credentialId: 'LinkedIn-Verified-Credential',
    verificationUrl: 'https://www.linkedin.com/in/Barun-Chhetri',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Generative AI Concepts', 'Algorithms'],
    icon: 'BrainCircuit',
    accentColor: '#0077b5'
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
  },
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
