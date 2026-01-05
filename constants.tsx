
import { Project, Expertise, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'AI-Driven Wealth Management',
    edge: 'The AI Edge',
    role: 'Software Engineer, Gen AI',
    problem: 'Enhancing advisor-client communications with intelligent, context-aware tools.',
    action: 'Built Generative AI services using Python and FastAPI, leveraging Azure AI and LangChain for RAG-based search.',
    impact: 'Implemented automated text processing for document summarization and content refinement, streamlining advisor workflows.',
    color: 'blue'
  },
  {
    id: '02',
    title: 'FinTech Payment Infrastructure',
    edge: 'The Scale Edge',
    role: 'Software Engineer, Financial Technology',
    problem: 'Modernizing payment processing for a high-traffic community engagement platform.',
    action: 'Redesigned payment systems integrating Stripe, PayPal, and ACH gateways while architecting indexing solutions using Redis Search and Kafka.',
    impact: 'Managed 7 distributed databases and ensured platform stability through rigorous sprint planning and defect-free production releases.',
    color: 'emerald'
  },
  {
    id: '03',
    title: 'HealthTech SaaS Framework',
    edge: 'The Security Edge',
    role: 'Software Engineer, Health Tech',
    problem: 'Moving a personalized longevity platform to a multi-tenant model under strict timelines.',
    action: 'Architected a HIPAA-compliant framework and optimized cloud performance using recursive queries and S3 indexing via DynamoDB.',
    impact: 'Successfully transitioned the platform in two months while cutting operational infrastructure costs by 50%.',
    color: 'indigo'
  },
  {
    id: '04',
    title: 'IoT Rail Logistics',
    edge: 'The Real-Time Edge',
    role: 'Developer, Transportation and Logistics',
    problem: 'Building high-precision asset tracking for rail infrastructure.',
    action: 'Engineered real-time tracking using AWS AppSync and integrated MapBox and Amazon Location Services for live mapping.',
    impact: 'Transitioned prototypes into production-ready mobile features for field operations across iOS and Android.',
    color: 'cyan'
  }
];

export const EXPERTISE: Expertise[] = [
  {
    title: 'Architectural Design',
    description: 'Skilled in transitioning monolithic services to Event-Driven Architectures and managing complex ecosystems involving 30+ repositories.',
    icon: 'Layout'
  },
  {
    title: 'Security & Compliance',
    description: 'Deeply experienced in maintaining HIPAA and GDPR standards, with a focus on resolving vulnerabilities in identity providers.',
    icon: 'Shield'
  },
  {
    title: 'Cloud Efficiency',
    description: 'Focused on re-engineering infrastructure to optimize costs, achieving up to 50% reduction in monthly operational expenses.',
    icon: 'Cloud'
  },
  {
    title: 'Technical Planning',
    description: 'Experienced in overseeing project lifecycles, capacity forecasting, and task estimation to ensure predictable delivery.',
    icon: 'Zap'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'JSX', 'TypeScript', 'Dart', 'Kotlin', 'Python', 'HTML/CSS']
  },
  {
    category: 'Frameworks',
    skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Ionic', 'Express.js', 'FastAPI', 'Jetpack Compose']
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS (ECS, Lambda, Step Functions)', 'Azure (Function Apps, Logic Apps)', 'Terraform', 'Firebase', 'Google Cloud Run']
  },
  {
    category: 'Data & AI',
    skills: ['PostgreSQL', 'DynamoDB', 'Redis Search', 'Kafka', 'LangChain', 'Prompt Engineering', 'Vector Databases']
  }
];
