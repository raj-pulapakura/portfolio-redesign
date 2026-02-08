export class ProjectDataPoint {
  title: string;
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
    title: "ClarityScan: Deep Learning for Tumor Diagnosis",
    description:
      "Medical imaging workflow that denoises MRI scans and segments glioma tumors through a production-ready web app.",
    impactHighlights: [
      'Dice coefficient up to 91% on tumor segmentation.',
      'Approx. 5-second inference pipeline with GPU-backed APIs.',
      'End-to-end ownership across modeling, API deployment, and web delivery.',
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
    title: "Computer Vision-Powered Search Engine",
    description:
      'Similarity search application that converts uploaded images into embeddings and returns nearest visual matches.',
    impactHighlights: [
      'Implemented embedding retrieval with MobileNetV3 + PyTorch.',
      'Deployed inference service via BentoML and AWS serverless infrastructure.',
      'Shipped drag-and-drop UX with reproducible IaC deployment.',
    ],
    thumbnailURL:
      "https://github.com/raj-pulapakura/Image-Search-Engine/assets/87762282/21702ad9-6cfe-4a5d-8385-cc65fad8eded",
    githubURL: "https://github.com/raj-pulapakura/Image-Search-Engine/",
    videoURL: "https://www.youtube.com/watch?v=loBZkPvn29c",
    webURL: "https://image-search-pro.vercel.app",
    tags: [
      "aws",
      "machine-learning",
      "computer-vision",
      "neural-network",
      "responsive",
      "nextjs",
      "image-processing",
      "pytorch",
      "siamese-network",
      "searchengine",
      "resnet50",
      "bentoml",
      "mobilenetv3",
      "vercel",
    ],
    technologiesUsed: [
      "PyTorch",
      "BentoML",
      "AWS",
      "Terraform",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  }),
  new ProjectDataPoint({
    title: "Real Time Gesture Detection Dino Game",
    description:
      'Computer vision game prototype where users control gameplay through real-time hand gestures.',
    impactHighlights: [
      'Built real-time gesture detection loop with OpenCV + TensorFlow.',
      'Connected model output to game controls in Pygame.',
      'Demonstrated low-latency interaction for CV-based UI concepts.',
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
    description:
      'Full-stack ecommerce platform with payments, state management, and API orchestration.',
    impactHighlights: [
      'Implemented commerce flows across cart, checkout, and payment.',
      'Integrated Stripe and GraphQL-based backend architecture.',
      'Containerized local stack with Docker Compose for rapid setup.',
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
    description:
      'Web app that classifies user text for toxicity risk and provides immediate model feedback.',
    impactHighlights: [
      'Integrated TensorFlow models into a responsive frontend flow.',
      'Delivered interactive inference experience on Vercel deployment.',
      'Packaged model + UX for practical NLP safety experimentation.',
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
