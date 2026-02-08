'use client';

import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import Chip from '../../shared/ui/Chip';

const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'Bash', 'JavaScript', 'HTML/CSS/Sass'],
  },
  {
    title: 'Frontend and Backend',
    items: [
      'React.js',
      'Next.js',
      'Nest.js',
      'HTML',
      'CSS',
      'Sass',
      'Tailwind',
      'Material UI',
      'Redux',
      'Zustand',
      'Node.js',
      'FastAPI',
      'Flask',
      'Express.js',
      'GraphQL',
    ],
  },
  {
    title: 'AI (ML + Generative AI + Data Science)',
    items: [
      'OpenAI API',
      'Gemini API',
      'Claude API',
      'Unstructured.io',
      'Pinecone DB',
      'MCP',
    ],
  },
  {
    title: 'Databases',
    items: [
      'MongoDB',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Firebase',
      'ChromaDB',
      'Snowflake',
      'Coalesce',
    ],
  },
  {
    title: 'Cloud, CI/CD',
    items: [
      'AWS (ECR, EKS, EC2, S3, IAM, DynamoDB, Lambda, Athena, Glue)',
      'Azure (Storage, AI Services, Function App, Cosmos DB, Entra ID)',
      'Terraform',
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
    ],
  },
];

const certificationPaths = [
  {
    title: 'Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'Jan 2026',
    path: 'certifications/azure-ai-engineer-associate.png',
    url: 'https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/878730d9b7900aa9?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    date: 'Sep 2024',
    path: 'certifications/azure-ai-engineer-associate.png',
    url: 'https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/878730d9b7900aa9?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Aug 2024',
    path: 'certifications/azure-ai-fundamentals.png',
    url: 'https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/f37ed11bbc74f2d?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Jul 2024',
    path: 'certifications/azure-fundamentals.png',
    url: 'https://learn.microsoft.com/en-us/users/rajpulapakura-2404/credentials/1268f0982a05a191?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Machine Learning - Specialty',
    issuer: 'AWS',
    date: 'Jun 2024',
    path: 'certifications/aws-machine-learning-specialty.png',
    url: 'https://www.credly.com/badges/87092f70-1635-41e6-86aa-79654f1303b5/linked_in_profile',
  },
  {
    title: 'TensorFlow Developer',
    issuer: 'Google',
    date: 'Credentialed',
    path: 'certifications/tensorflow-developer-certificate.png',
    url: 'https://www.credential.net/de2045b4-0766-49ad-8035-a1a97846bca6b#acc.V0QCGTgk',
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      backgroundClassName="bg-surface"
      className="py-24"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            Engineering capabilities across modern software delivery.
          </h2>
          <p className="text-secondary max-w-2xl">
            Languages, product engineering, AI tooling, databases, and cloud
            delivery.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[2.2fr_1fr] items-start">
          <div className="glass-panel accent-outline rounded-[32px] p-6 md:p-8 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Chip key={skill} className="text-[0.65rem]">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}

            <AccentDivider />
            <p className="text-sm text-secondary">
              Applied across full-stack products, data systems, and deployed AI
              workflows.
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-panel accent-outline rounded-[32px] p-6 md:p-8 flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                    Certifications
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    Cloud + AI Credentials
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-accent">
                  Verified
                </span>
              </div>

              <div className="space-y-3">
                {certificationPaths.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-white/5 bg-muted/60 p-3 transition hover:border-accent/70"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={cert.path}
                        alt={`${cert.title} badge`}
                        className="h-10 w-10 rounded-md object-contain bg-background/60 p-1"
                      />
                      <div>
                        <p className="text-sm font-semibold text-primary">
                          {cert.title}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-accent mt-1">
                          View credential
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-sm text-secondary">
                Validated across AWS and Azure cloud tooling, applied AI
                services, and production-grade ML workflows.
              </p>
            </div>

          </div>
        </div>

      </div>
    </SectionShell>
  );
}
