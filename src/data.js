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
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'React', 'REST APIs', 'WebSockets', 'Celery', 'Pydantic', 'pytest'],
  },
  {
    group: 'AI/ML & Voice',
    items: ['PyTorch', 'TensorFlow', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'Hugging Face', 'BERT', 'LiveKit', 'Deepgram', 'Twilio', 'Agentic Workflows', 'MCP', 'Multi-Agent Orchestration', 'LlamaIndex', 'LLM Evaluation', 'Langfuse', 'Prompt Caching', 'ElevenLabs'],
  },
  {
    group: 'Cloud, DevOps & Data',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'CI/CD', 'Git/GitHub', 'GitHub Actions', 'PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'],
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
    highlight: { value: '4,496', label: 'production voice turns benchmarked' },
    bullets: [
      'Validated a Gemini Live speech-to-speech voice agent workflow for self-storage end to end on live test calls, bridging Twilio Media Streams over real-time WebSocket audio with in-house tool calling (unit recommendation, SMS, transfer) on a 36-unit storage catalog.',
      'Blocked hallucinated price quotes and unsafe inputs with Python guardrails: input guards for emergencies, card numbers, and prompt injection, plus an output gate that strips prices, enforced as hard pass/fail gates in a 25-script QA suite.',
      'Surfaced defects such as ignored SMS opt-outs and unit-sizing errors by building a 25-script, 116-turn pytest eval suite on Langfuse traces, then coordinating 3 testers scoring 60+ live phone calls.',
      'Set end-to-end latency targets (under 1.5s) and a cascaded vs. speech-to-speech cost comparison with a Langfuse baseline over 4,496 production voice turns from about 970 callers (P50 2.62s, P95 10.79s, $0.0036 per turn).',
      'Cut latency and database lookups by about 10% by caching the unit catalog and 5-minute conversation history with Gemini context caching, and fixed human-handoff reliability with a 2s PostgreSQL timeout that falls back to in-memory state.',
    ],
    tags: ['Gemini Live', 'Twilio', 'WebSockets', 'Langfuse', 'pytest', 'PostgreSQL', 'Python'],
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
      'Built a scalable span identification pipeline with DistilBERT and BiLSTM models to tag link-worthy phrases across 5GB of Wikipedia text, enhancing contextual hyperlinking.',
      'Designed and implemented a Retrieval-Augmented Generation (RAG) system using FAISS and Sentence Transformers to retrieve semantically relevant internal articles, achieving an 80% F1 score in link prediction.',
    ],
    tags: ['PyTorch', 'TensorFlow', 'BERT', 'GNNs', 'Hugging Face', 'Vertex AI', 'DistilBERT', 'FAISS', 'RAG'],
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
      'Built landlord-student messaging and keyword-based roommate matching with Express.js APIs, storing student profiles in a PostgreSQL database to pair students with compatible housing partners.',
    ],
    tags: ['React', 'Express.js', 'Node.js', 'PostgreSQL'],
  },
]

export const projects = [
  {
    id: 'blinktalk',
    title: 'BlinkTalk',
    kind: 'AI · Accessibility',
    blurb: 'A browser-based, eye-controlled voice for people who cannot speak, with no special hardware.',
    stack: ['Python', 'FastAPI', 'Next.js', 'MediaPipe', 'Gemini', 'ElevenLabs', 'SQLite', 'Vultr'],
    problem:
      'People who cannot speak need a fast way to answer questions at the bedside. BlinkTalk lets gaze and blinks pick one of six Gemini replies, spoken in a cloned ElevenLabs voice.',
    approach: [
      'Engineered gaze and blink selection of one of six Gemini replies (1.1 s median), spoken in a cloned ElevenLabs voice.',
      'Cut spoken-reply start time to 0.07 s for prepared replies (about 0.3 s for new phrases) with a voice service that prefetches all six reply tiles in the background behind a SHA-1 MP3 cache.',
      'Redirected 12/12 off-topic questions while still answering 12/12 bedside questions by restricting Gemini to hospital and hospice care, with a guaranteed guardrail reply tile for anything outside it.',
      'Capped paid-API usage at 30 suggestions and 20 new voice clips per minute per IP with rate limiting across a 9-route REST API, SQLite storage, and browser-speech fallback when ElevenLabs fails.',
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/tupe-atharva/blink-talk' }],
  },
  {
    id: 'prism',
    title: 'PRism',
    kind: 'AI · Multi-agent',
    blurb: 'A multi-agent GitHub pull request review system for summaries, labeling, and reviewer assignment.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'MCP', 'OpenAI', 'Next.js', 'PostgreSQL', 'pgvector'],
    problem:
      'Reviewing pull requests by hand is slow. PRism coordinates AI agents to summarize, label, and assign reviewers, with a human approving every write.',
    approach: [
      'Architected a multi-agent system with LangGraph, coordinating 4 AI agents and 1 orchestrator agent for PR summaries, labeling, and reviewer assignment, at 10s p95 latency.',
      'Designed an MCP server with human-approved writes and checkpoint recovery, blocking 10/10 prompt-injection attempts.',
      'Created a CI/CD evaluation pipeline across 30 PRs, achieving 85% label F1, 90% reviewer hit@3, and $0.025 per PR.',
    ],
    links: [{ label: 'View on GitHub', href: 'https://github.com/tupe-atharva' }],
  },
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

export const achievements = [
  {
    title: 'Winner',
    org: 'UB Hacking 2026',
    text: 'Won UB Hacking 2026, the University at Buffalo hackathon.',
    link: { label: 'View LinkedIn post', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7525649171228573696/' },
  },
]
