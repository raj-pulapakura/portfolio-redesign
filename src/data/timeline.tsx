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
    title: 'Left high school to pursue building full-time',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          After years of self-directed software and ML learning, I left high
          school to go all-in on building real products and pursuing software
          engineering professionally.
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
          Built an agritech property-report system for farmers using geospatial
          data pipelines and cloud infrastructure.
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            • Engineered a tool for AOI (Area of Interest) insights including
            bushfire risk, precipitation, and satellite data layers.
          </li>
          <li>
            • Integrated six geospatial third-party APIs and organized
            large-scale datasets (&gt;1TB) in Parquet/CSV formats.
          </li>
          <li>
            • Shipped Python backend + Next.js frontend with Dockerized
            services for consistent deployment.
          </li>
          <li>
            • Automated infrastructure provisioning and CI/CD through Terraform
            and GitHub Actions on AWS.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      'Next.js',
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
    title: 'Software Engineer: Time Under Tension',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>
          Built client-facing Generative AI products for enterprise and
          mid-market customers in retail, legal/compliance, and aged care.
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            • Built a RAG platform for a major retailer that reduced complex
            inquiry response time from 3+ hours to under 30 seconds.
          </li>
          <li>
            • Engineered an AI compliance application with 95% detection
            accuracy, auto-rewriting non-compliant descriptions and reducing
            review time by 300%+.
          </li>
          <li>
            • Delivered multiple AI proof-of-concepts including voice/chat
            agents and internal automation tools.
          </li>
          <li>
            • Partnered directly with technical and non-technical stakeholders
            across discovery, requirements, demos, and iteration.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      'React',
      'Nest.js',
      'TypeScript',
      'Python',
      'Azure OpenAI',
      'Pinecone',
      'Unstructured.io',
    ],
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
    title: 'AI Engineer: Synogize',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>
          Working across AI product delivery, data engineering, and
          consulting-led implementation for enterprise clients.
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            • Key contributor to PLATTII (AI-driven Snowflake marketplace
            product), helping cut inference time by 50% and improve frontend
            session performance.
          </li>
          <li>
            • Developed 10+ data models for a global automotive client as part
            of a modern data migration project.
          </li>
          <li>
            • Supported internal AI capability uplift via Azure AI Foundry RAG
            demos and technical knowledge sharing.
          </li>
        </ul>
      </div>
    ),
    technologies: [
      'Next.js',
      'FastAPI',
      'TypeScript',
      'Python',
      'Azure',
      'Snowflake',
      'Coalesce',
      'SQL',
    ],
  }),
];
