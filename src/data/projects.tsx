export class ProjectDataPoint {
  title: string;
  description: string;
  thumbnailURL: string;
  githubURL: string;
  videoURL: string;
  webURL: string;
  tags: string[];
  technologiesUsed: string[];

  constructor({
    title,
    description,
    thumbnailURL,
    githubURL,
    videoURL,
    webURL,
    tags,
    technologiesUsed,
  }: {
    title: string;
    description: string;
    thumbnailURL: string;
    githubURL: string;
    videoURL: string;
    webURL: string;
    tags: string[];
    technologiesUsed: string[];
  }) {
    this.title = title;
    this.description = description;
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
      "An app that enables radiologists to enhance brain MRI scans and easily identify glioma tumors in the scans.",
    thumbnailURL:
      "https://private-user-images.githubusercontent.com/87762282/311922849-e56b9135-0c65-42d7-910c-a7bc4ead6615.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAyMTIwNjQsIm5iZiI6MTcxMDIxMTc2NCwicGF0aCI6Ii84Nzc2MjI4Mi8zMTE5MjI4NDktZTU2YjkxMzUtMGM2NS00MmQ3LTkxMGMtYTdiYzRlYWQ2NjE1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzEyVDAyNDkyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBiZjljNjkyZmRhYWVhMGY3OGQ4ODU2NDliNzkwZjIzNzk2NzExOTUyODAzNDY4ZTVjYjBmOWMwYzcyYWU3NWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4RVY0uK8qFOTXE5ACPDH6GOTMc8fAadJEv8V2hScH1U",
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
    description: "Upload an image and find similar images easily!",
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
    description: "The classic dino game, except its controlled by your hand!",
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
    description: "The ecommerce website for shoe addicts.",
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
    description: "Rate your toxic sentences!",
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
