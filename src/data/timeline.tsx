import { ReactNode } from 'react';
export class TimelineDataPoint {
  date: string;
  title: string;
  extraInformation: string | ReactNode;
  technologies?: string[];

  constructor({
    date,
    title,
    extraInformation,
    technologies,
  }: {
    date: string;
    title: string;
    extraInformation: string | ReactNode;
    technologies?: string[];
  }) {
    this.date = date;
    this.title = title;
    this.extraInformation = extraInformation;
    this.technologies = technologies;
  }
}

export const timelineData = [
  new TimelineDataPoint({
    date: "Jan '21",
    title: 'Wrote my first line of code',
    extraInformation:
      'Discovered Python, and fell in love with programming.',
    technologies: ['Python', 'Django'],
  }),
  new TimelineDataPoint({
    date: "Dec '23",
    title: 'Dropped out of school',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          Having taught myself programming and machine learning for over 3
          years, I dropped out of school to pursue a career in software engineering.
        </p>
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: "Jan '24",
    title: 'Internship: A.I.GORITHM',
    extraInformation: (
      <div>
        <p className="mb-3">
          For this 1.5 month internship, I worked for an{' '}
          <span className="font-bold">Agritech</span> climate risk and analysis
          startup called <span>A.I.GORITHM</span>, where my primary focus was
          building A.I.GORITHM's Property Report Tool:
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            • Developed and deployed a Property Report Generation Tool which
            enables farmers to get detailed{' '}
            <span className="font-bold">agricultural reports</span> pertaining
            to their geographical AOI (area of interest).
          </li>
          <li>
            • Pooled and organized{' '}
            <span className="font-bold">geospatial data</span> from several APIs
            and data sources to provide agricultural analytics to farmers.
          </li>
          <li>
            • Employed{' '}
            <span className="font-bold">microservices architecture</span> to
            develop APIs/services and a user-facing website.
          </li>
          <li>
            • Automated deployment via GitHub Actions{' '}
            <span className="font-bold">CI/CD pipeline</span> and Terraform IaC
            (Infrastructure as Code), to provision AWS resources.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      'Next.JS',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'NumPy',
      'Pandas',
      'GeoPandas',
      'SendGrid',
      'Terraform',
      'Docker',
      'AWS',
    ],
  }),
  new TimelineDataPoint({
    date: "Apr '24",
    title: 'Full-time AI Engineer: Time Under Tension',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>Time Under Tension is a Generative AI consultancy that helps businesses build AI-powered solutions.</p>
        <ul>
          <li>
          • Built two flagship AI systems:
            <ol>
              <li><strong>1. RAG chat platform for a retail giant</strong> – reduced complex inquiry response times from 3+ hours to under 30 seconds.</li>
              <li><strong>2. AI compliance app for a multinational</strong> – detects and auto-rewrites non-compliant product descriptions with 95% accuracy, cutting review times by 300%+.</li>
            </ol>
          </li>
          <li>
            • Delivered multiple AI/automation proof-of-concepts: voice/chat agent for aged care, Figma-to-code converter, and a text-to-PPT SaaS tool.
          </li>
          <li>
            • Collaborated with technical and non-technical stakeholders through discovery calls, requirement gathering, progress updates, and live demos.
          </li>
        </ul>
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: "May '24",
    title: "Won an AI Hackathon",
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>
          I won the AI Hackathon hosted by MLAI Aus. My team and I built the most innovative
          AI trading bot for predicting energy market prices.
        </p>

        <img src="/photos/hackathon.jpg" />
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: "Sep '25",
    title: 'Full-time AI Engineer: Synogize',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>Synogize is a Data and AI agency, where I am currently working as an AI Engineer.</p>
      </div>
    ),
  }),
];
