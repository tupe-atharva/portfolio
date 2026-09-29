// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Atharva Tupe',
  role: 'Software Engineer · AI Engineer',
  location: 'Binghamton, NY',
  email: 'atupe2@binghamton.edu',
  linkedin: 'https://www.linkedin.com/in/atharvatupe/',
  github: 'https://github.com/tupe-atharva',
  resume: 'Atharva_Tupe_Resume.pdf',
  headline: 'Real-time voice AI, and the backend that keeps it fast.',
  intro:
    'Software Engineer and MS CS candidate at Binghamton University. I build scalable backend systems, real-time applications, and AI-powered products, from research models to production APIs.',
  availability: 'Open to SWE, AI and ML roles · MS graduating May 2027 · Open to relocation',
}

export const about = {
  lead:
    'I work where machine learning meets production engineering. Right now that means re-architecting a live voice agent platform at EasyBee AI, and training transformer and graph models as a research assistant at Binghamton.',
  body:
    'I care about latency, clean APIs, and systems that hold up when real customers are on the line. Outside of work I run Synapse.AI, a campus AI club, and help prospective graduate students find their way into Watson College.',
}

export const education = [
  {
    school: 'Binghamton University, SUNY',
    degree: 'Master of Science, Computer Science',
    period: 'Expected May 2027',
    detail: 'GPA 3.71 / 4.0',
    coursework: 'AI/ML, Data Structures & Algorithms, OS, Cloud Computing, Database Systems, Software Engineering',
  },
  {
    school: 'MIT ADT University, Pune',
    degree: 'Bachelor of Technology, Computer Science and Engineering',
    period: 'May 2025',
    detail: 'Pune, India',
  },
]

export const skills = [
  {
    group: 'Languages & Backend',
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    group: 'AI/ML & Voice',
    items: ['PyTorch', 'TensorFlow', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'Hugging Face', 'BERT', 'LiveKit', 'Deepgram', 'Twilio'],
  },
  {
    group: 'Cloud, DevOps & Data',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git/GitHub', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
]

export const experience = [
  {
    company: 'EasyBee AI, Inc.',
    role: 'AI Engineer',
    location: 'Boston, MA',
    start: 'Sept 2026',
    end: 'Present',
    current: true,
    highlight: { value: '0.5s → 0.05s', label: 'endpoint detection latency' },
    bullets: [
      'Re-architected the production voice agent platform from a cascaded STT → LLM → TTS pipeline to a native speech-to-speech architecture using LiveKit, Deepgram, and LangGraph, enabling lower-latency real-time conversations.',
      'Built an in-house voice activity detection system using LiveKit Flux with a backup VAD architecture, replacing WebRTC and Silero VAD and reducing silence and endpoint detection latency from 0.5s to 0.05s.',
      'Engineered multi-turn conversation awareness and barge-in handling within LangGraph-orchestrated workflows, preserving dialogue context across interruptions during live customer calls.',
      'Developed and deployed customer-facing voice agent workflows using Python, FastAPI, Twilio, LiveKit, and AWS for enterprise self-storage clients across the US and UK.',
    ],
    tags: ['LiveKit', 'Deepgram', 'LangGraph', 'FastAPI', 'Twilio', 'AWS'],
  },
  {
    company: 'Binghamton University',
    role: 'AI/ML Graduate Research Assistant',
    location: 'Binghamton, NY',
    start: 'Dec 2025',
    end: 'Present',
    current: true,
    highlight: { value: '+15%', label: 'model accuracy' },
    bullets: [
      'Fine-tuned BERT and Bidirectional LSTM models in PyTorch and TensorFlow to extract text and link spans from Wikipedia articles, improving model accuracy by 15%.',
      'Applied graph neural networks to predict links between Wikipedia articles, using cross-validation to compare models and select the most reliable approach.',
      'Trained and fine-tuned Hugging Face transformer models and deployed them on Google Cloud Vertex AI, moving research models from experiments into production.',
    ],
    tags: ['PyTorch', 'TensorFlow', 'BERT', 'GNNs', 'Hugging Face', 'Vertex AI'],
  },
  {
    company: 'Denner Ventures Pvt. Ltd.',
    role: 'Software Development Engineer',
    location: 'Pune, India',
    start: 'Oct 2024',
    end: 'Mar 2025',
    highlight: { value: '1,000+', label: 'concurrent users' },
    bullets: [
      'Developed a student housing platform using React and Express.js, building core features for landlord-student communication and roommate matching.',
      'Engineered scalable frontend features and deployed them to production, supporting 1,000+ concurrent users with responsive experiences across desktop, tablet, and mobile.',
    ],
    tags: ['React', 'Express.js', 'Node.js'],
  },
]

export const projects = [
  {
    id: 'resumeiq',
    title: 'ResumeIQ',
    kind: 'AI · Data pipeline',
    blurb: 'An end-to-end RAG pipeline that parses job descriptions and retrieves the most relevant experience.',
    stack: ['Python', 'FastAPI', 'LangChain', 'GPT-4', 'RAG', 'Airflow', 'Kafka', 'Docker', 'PostgreSQL', 'Redis', 'AWS'],
    problem:
      'Matching a résumé to a job description by hand is slow and inconsistent. ResumeIQ parses the JD and semantically retrieves the experience that actually fits.',
    approach: [
      'Built an end-to-end RAG pipeline for JD parsing and semantic retrieval using LangChain and GPT-4.',
      'Orchestrated the ingestion and retrieval stages with Apache Airflow and Kafka, containerized with Docker on AWS.',
      'Split the system into modular microservices with PostgreSQL and Redis caching behind RESTful APIs.',
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/tupe-atharva/ResumeIQ' }],
  },
  {
    id: 'dailydock',
    title: 'DailyDock',
    kind: 'Full-stack · Campus app',
    blurb: 'A campus dashboard bringing live shuttles, dining, and calendar data together for Binghamton students.',
    stack: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'Google OAuth', 'JWT', 'Vercel'],
    problem:
      'Binghamton students juggle separate sites for shuttle times, dining halls, and their schedule. DailyDock puts them on one screen, live.',
    approach: [
      'Reverse-engineered a geolocation-aware transit ETA API (OCCT SPOT API) to power real-time shuttle tracking.',
      'Integrated live shuttle, dining, and calendar data behind a FastAPI and PostgreSQL backend.',
      'Implemented Google OAuth with JWT-based authentication and a WCAG/ARIA accessible UI with dark and light modes.',
    ],
    outcome: 'Used by 100+ Binghamton students.',
    links: [
      { label: 'Live site', href: 'https://daily-dock-puce.vercel.app' },
      { label: 'View on GitHub', href: 'https://github.com/tupe-atharva/DailyDock' },
    ],
  },
]

export const leadership = [
  {
    title: 'President',
    org: 'Synapse.AI',
    text: 'Lead Binghamton’s campus AI club, bringing students together around machine learning, projects, and talks.',
  },
  {
    title: 'Graduate Student Assistant',
    org: 'Watson College Recruitment Team',
    text: 'Run 1:1 advising calls with prospective graduate students and support weekly info sessions and the team’s new Instagram page.',
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect', level: 'Associate', issuer: 'Amazon Web Services' },
  { name: 'AWS Certified Cloud Practitioner', level: 'Foundational', issuer: 'Amazon Web Services' },
  { name: 'Google Cybersecurity Certificate', level: 'Professional Certificate', issuer: 'Google' },
]
