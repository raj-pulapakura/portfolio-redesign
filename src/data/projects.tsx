export class ProjectDataPoint {
  title: string;
  year: string;
  description: string;
  impactHighlights: string[];
  thumbnailURL: string;
  githubURL: string;
  videoURL: string;
  webURL: string;
  tags: string[];
  technologiesUsed: string[];

  constructor({
    title,
    year,
    description,
    impactHighlights,
    thumbnailURL,
    githubURL,
    videoURL,
    webURL,
    tags,
    technologiesUsed,
  }: {
    title: string;
    year: string;
    description: string;
    impactHighlights: string[];
    thumbnailURL: string;
    githubURL: string;
    videoURL: string;
    webURL: string;
    tags: string[];
    technologiesUsed: string[];
  }) {
    this.title = title;
    this.year = year;
    this.description = description;
    this.impactHighlights = impactHighlights;
    this.thumbnailURL = thumbnailURL;
    this.githubURL = githubURL;
    this.videoURL = videoURL;
    this.webURL = webURL;
    this.tags = tags;
    this.technologiesUsed = technologiesUsed;
  }
}

export const projectsData = [
  new ProjectDataPoint({
    title: 'Monti',
    year: '2025',
    description:
      'Generate interactive learning experiences from a prompt. Hands-on learning!',
    impactHighlights: [
      'My first full-stack SaaS product! Billing, a credit system, and authentication!',
    ],
    thumbnailURL: '/projects/monti%20GIF.gif',
    githubURL: 'https://github.com/raj-pulapakura/monti',
    videoURL: '',
    webURL: 'https://monti.up.railway.app',
    tags: [
      'nextjs',
      'nestjs',
      'supabase',
      'postgresql',
      'ai',
      'openai',
      'anthropic',
      'google-ai',
      'stripe',
      'docker',
      'education',
      'interactive',
    ],
    technologiesUsed: [
      'Next.js',
      'NestJS',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Docker',
      'Stripe',
    ],
  }),
  new ProjectDataPoint({
    title: "ClarityScan: Deep Learning for Tumor Diagnosis",
    year: '2024',
    description:
      "A web workflow for cleaning MRI scans and segmenting glioma tumors.",
    impactHighlights: [
      'Reached up to a 91% Dice coefficient on tumor segmentation.',
      'Powered by 2 deep learning models.',
    ],
    thumbnailURL:
      "https://github.com/raj-pulapakura/ClarityScan/assets/87762282/e56b9135-0c65-42d7-910c-a7bc4ead6615",
    githubURL: "https://github.com/raj-pulapakura/ClarityScan",
    videoURL: "https://www.youtube.com/watch?v=v9OmIxve9Zs",
    webURL: "http://clarityscan-447069715.us-east-1.elb.amazonaws.com/",
    tags: [
      "aws",
      "machine-learning",
      "computer-vision",
      "neural-network",
      "responsive",
      "nextjs",
      "image-processing",
      "tensorflow",
      "image-segmentation",
    ],
    technologiesUsed: [
      "Python",
      "TensorFlow",
      "NumPy",
      "Modal",
      "AWS",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  }),
  new ProjectDataPoint({
    title: "Real Time Gesture Detection Dino Game",
    year: '2023',
    description:
      'A small computer vision experiment where your hand controls the Chrome Dino game.',
    impactHighlights: [
      'Built the gesture detection loop with OpenCV and TensorFlow.',
      'Mapped model output into Pygame controls.',
    ],
    thumbnailURL:
      "https://github.com/raj-pulapakura/Dino-Game-controlled-by-Gesture-Detection/assets/87762282/92b7e1e9-918a-4d7a-bc19-5f518aca820c",
    githubURL:
      "https://github.com/raj-pulapakura/Dino-Game-controlled-by-Gesture-Detection",
    videoURL: "https://www.youtube.com/watch?v=GvOFWHpD_iY",
    webURL: "",
    tags: [
      "python",
      "opencv",
      "computer-vision",
      "deep-learning",
      "tensorflow",
      "game-development",
      "pygame",
      "object-detection",
      "gesture-recognition",
      "dinosaur-game",
    ],
    technologiesUsed: ["Python", "Pygame", "TensorFlow", "OpenCV", "NumPy"],
  }),
  new ProjectDataPoint({
    title: "UltraRide",
    year: '2023',
    description:
      'A full-stack ecommerce build for browsing products, managing a cart, and checking out with Stripe. The goal was to understand the moving pieces behind a real commerce flow.',
    impactHighlights: [
      'Built cart, checkout, payment, and backend API flows.',
      'Used Docker Compose to keep the local stack easy to run.',
    ],
    thumbnailURL:
      "https://github.com/raj-pulapakura/ultraride/assets/87762282/7165b700-6f2c-4ab6-9510-0aed381f67da",
    githubURL: "https://github.com/raj-pulapakura/ultraride",
    videoURL: "",
    webURL: "",
    tags: [
      "react",
      "nodejs",
      "mysql",
      "graphql",
      "docker",
      "redis",
      "website",
      "ecommerce",
      "stripe",
      "materialui",
      "expressjs",
      "apollographql",
      "typeorm",
    ],
    technologiesUsed: [
      "TypeScript",
      "React.js",
      "Material UI",
      "Redux",
      "Node.js",
      "Express.js",
      "GraphQL",
      "TypeORM",
      "Stripe API",
      "Redis",
      "Docker",
      "Docker Compose",
      "MySQL",
    ],
  }),
  new ProjectDataPoint({
    title: "Comment Toxicity Checker",
    year: '2022',
    description:
      'A small NLP app that checks text for toxicity and gives quick model feedback. It was an early project for making machine learning feel interactive in the browser.',
    impactHighlights: [
      'Integrated TensorFlow models into a responsive frontend flow.',
      'Deployed the experiment on Vercel for quick sharing.',
    ],
    thumbnailURL:
      "https://github.com/raj-pulapakura/Comment-Toxicity-Checker/assets/87762282/5e5ac56b-083f-4341-ac8a-a6ed9d04d304",
    githubURL: "https://github.com/raj-pulapakura/Comment-Toxicity-Checker",
    videoURL: "",
    webURL: "https://comment-toxicity-checker.vercel.app/",
    tags: [
      "react",
      "nextjs",
      "machine-learning",
      "natural-language-processing",
      "deep-learning",
      "neural-networks",
      "tensorflow",
      "nextjs",
      "kaggle",
      "tensorflowjs",
    ],
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "Tailwind CSS",
      "TensorFlow",
      "TensorFlow Lite",
      "TensorFlow JS",
    ],
  }),
];
