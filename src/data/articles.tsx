export class ArticleDataPoint {
  title: string;
  subtitle: string;
  articleURL: string;
  thumbnailURL: string;
  tags: string[];
  firstPara: string;
  datePublished: string;

  constructor({
    title,
    subtitle,
    articleURL,
    thumbnailURL,
    tags,
    firstPara,
    datePublished,
  }: {
    title: string;
    subtitle: string;
    articleURL: string;
    thumbnailURL: string;
    tags: string[];
    firstPara: string;
    datePublished: string;
  }) {
    this.title = title;
    this.subtitle = subtitle;
    this.articleURL = articleURL;
    this.thumbnailURL = thumbnailURL;
    this.tags = tags;
    this.firstPara = firstPara;
    this.datePublished = datePublished;
  }
}

export const articlesData = [
  new ArticleDataPoint({
    title: "Bridging the Gap: From LLMs to Autonomous Agents",
    subtitle:
      "Exploring the limits of language-based representations and the role of hierarchical planning",
    articleURL:
      "https://medium.com/@raj.pulapakura/bridging-the-gap-from-llms-to-autonomous-agents-93a51b6afce0",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*OVyj3dVRKEcf3ooxqipkzg.png",
    tags: ["Artificial Intelligence", "Agents", "Cognition"],
    firstPara:
      "In this article, we examine the constraints of language in AI and analyse the role of hierarchical planning in developing autonomous AI.",
    datePublished: "Mar 18, 2024",
  }),
  new ArticleDataPoint({
    title: "How To Build an End-to-End Medical Deep Learning Project",
    subtitle: "A walkthrough of my latest project: ClarityScan",
    articleURL:
      "https://medium.com/@raj.pulapakura/how-to-build-an-end-to-end-medical-deep-learning-project-11ad932b5a8f",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*eKnn1w-aHTFi49fupznHlw.png",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "MLOps",
      "MedTech",
    ],
    firstPara:
      "There are 5 steps to build an end-to-end machine learning project: 🍎 Data Collection 🚆 Model Development 🪂 Model Deployment 🧑‍💻 Application Development 🚀 Application Deployment",
    datePublished: "Mar 12, 2024",
  }),
  new ArticleDataPoint({
    title: "3 Lessons from My SWE Internship at a Startup",
    subtitle:
      "One month ago, I could have never anticipated the enormous growth I would experience as a software engineer, communicator, and problem-solver. These insights will be instrumental in my future corporate and personal ventures.",
    articleURL: "https://medium.com/@raj.pulapakura/1896ad469555",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*1ZwBPj1uMjXhbQ63",
    tags: [
      "Software Engineering",
      "Milestone",
      "Internship",
      "Startup",
      "Lessons In Life",
    ],
    firstPara:
      "👋 Hey there! I’m Raj, a 16-year-old software engineer who’s just concluded my 1.5-month internship at a tech startup in Melbourne. Although the journey was short and sweet, I’ve learned so much and the lessons I’ve garnered will continue to shape my future endeavours for years to come.",
    datePublished: "Mar 01, 2024",
  }),
  new ArticleDataPoint({
    title: "Multimodal Models and Fusion - A Complete Guide",
    subtitle:
      "Everything you need to know to get started with multimodal models and multimodal fusion!",
    articleURL: "https://medium.com/@raj.pulapakura/225ca91f6861",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Ag1eUL0hAjGUWnDeQeMhiw.png",
    tags: [
      "Multimodal AI",
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
      "Vector Embeddings",
    ],
    firstPara:
      "Personally, I learn better when I intake information from multiple sources about a particular subject. For example, if I wanted to learn about the Transformer architecture, here are some of the different sources I would use:",
    datePublished: "Feb 20, 2024",
  }),
  new ArticleDataPoint({
    title: "What Will AI Look Like in 2145?",
    subtitle: "Bringing Elysium’s “Med-Bay” to Life",
    articleURL:
      "https://medium.com/@raj.pulapakura/what-will-ai-look-like-in-2145-bcabdae0e407",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*y3Z07N_iEZZgt3Hb",
    tags: ["AI", "Future", "Humanity", "Utopia", "Medical Devices"],
    firstPara:
      "For a few minutes, I invite you to pause and relax. This article is intended to be a cool breeze of fresh air, a glimpse into what AI might look like in the future.",
    datePublished: "Feb 13, 2024",
  }),
  new ArticleDataPoint({
    title: "Image Segmentation — A Beginner's Guide",
    subtitle:
      "The essentials of Image Segmentation + implementation in TensorFlow",
    articleURL:
      "https://medium.com/@raj.pulapakura/image-segmentation-a-beginners-guide-0ede91052db7",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Jvrhdz0GlwCrsY5njOB_Tg.gif",
    tags: [
      "Image Segmentation",
      "Computer Vision",
      "Machine Learning",
      "Deep Learning",
    ],
    firstPara:
      "Image segmentation is a computer vision technique that assigns a label to every pixel in an image such that pixels with the same label share certain characteristics.",
    datePublished: "Feb 5, 2024",
  }),
  new ArticleDataPoint({
    title: "The Ultimate SaaS Tech Web Stack For Developing Paid Products",
    subtitle: "The Tech Stack for Peak Developer Experience",
    articleURL:
      "https://medium.com/@raj.pulapakura/the-ultimate-saas-tech-web-stack-for-developing-paid-products-1eb9f4c4bec6",
    thumbnailURL:
      "https://images.unsplash.com/photo-1626427223333-183395267453?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "Web Development",
      "Software Engineering",
      "SaaS",
      "Firebase",
      "Vercel",
      "Stripe",
    ],
    firstPara:
      "If you crave a frictionless developer experience and love using modern developer tools, then the Next.js/TypeScript/Firebase/Stripe/Vercel stack is a no-brainer.",
    datePublished: "Jan 29, 2024",
  }),
  new ArticleDataPoint({
    title: "Fine-tune Your Own BERT Token Classification Model",
    subtitle:
      "Use Hugging Face and TensorFlow to build a model that identifies molecular biology terms!",
    articleURL:
      "https://medium.com/@raj.pulapakura/fine-tune-your-own-bert-token-classification-model-06b1153fbf56",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*xnJvPuQyk0QZ0EAAhxnMRQ.png",
    tags: ["Hugging Face", "Bert", "Fine Tuning", "LLM", "NLP"],
    firstPara:
      "Over the last week I’ve been diving to the Hugging Face NLP libraries. It’s been a fun adventure, and I want to give back to the HF community with a tutorial on token classification for molecular biology (this is also for my learning!)",
    datePublished: "Jan 20, 2024",
  }),
  new ArticleDataPoint({
    title: "Vector Databases: A Beginner's Guide",
    subtitle:
      "A no-nonsense introduction to vector databases and embeddings, plus a code example with Chroma",
    articleURL:
      "https://medium.com/@raj.pulapakura/vector-databases-a-beginners-guide-723ce809f52b",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*79vBtz3D0rHPjOQdD7kKUQ.png",
    tags: [
      "LLMs",
      "Machine Learning",
      "Vector databases",
      "AI",
      "Deep Learning",
    ],
    firstPara:
      "Unless you’ve been living under a rock, you’ve probably heard of vector databases. The sheer speed of innovation in the AI world can make it hard to keep up with the latest buzzwords and technologies, such as embeddings, vectors, and vector databases. That’s why I’ve written this article, to bring you up to speed with these concepts in a beginner-friendly way.",
    datePublished: "Jan 10, 2024",
  }),
  new ArticleDataPoint({
    title: "2 Design Decisions that can Make or Break your ML System",
    subtitle:
      "How Static and Dynamic training/serving determines whether your production model will stand the test of time",
    articleURL:
      "https://medium.com/@raj.pulapakura/2-design-decisions-that-can-make-or-break-your-ml-system-14fbb22be512",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*TcD_7Td8F5_CURXzkSGPZw.png",
    tags: ["Machine Learning", "Data", "Production", "MlOps", "Data Science"],
    firstPara:
      "In the last article, we discussed the components of a production-grade ML Pipeline. While having a robust ML pipeline is a major step in the direction of success, it’s equally important to know how and when to use this pipeline, to avoid common issues like model staleness.",
    datePublished: "Jan 5, 2024",
  }),
  new ArticleDataPoint({
    title: "Data to Deployment: Crafting a Robust Machine Learning Pipeline",
    subtitle:
      "A journey through the inner workings of production-grade machine learning pipelines",
    articleURL:
      "https://medium.com/@raj.pulapakura/data-to-deployment-crafting-a-robust-machine-learning-pipeline-5cbff6fa60fc",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*02zaF-jTPIR2Lhe7axbGkg.png",
    tags: ["Machine Learning", "Data", "Production"],
    firstPara: "Ever wondered how machine learning systems work in production?",
    datePublished: "Dec 30, 2023",
  }),
  new ArticleDataPoint({
    title: "3 Reasons You Should Contribute to Open Source",
    subtitle: "Do you even open source, bro?",
    articleURL:
      "https://medium.com/@raj.pulapakura/3-reasons-you-should-contribute-to-open-source-6cc07ac0bb75",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*hQAUdDp5AK4BQP14e4I3bA.jpeg",
    tags: [
      "Open Source",
      "Programming",
      "Software Development",
      "GitHub",
      "Guide",
    ],
    firstPara:
      "The term open source refers to something people can modify and share because its design is publicly accessible. (https://opensource.com/resources/what-open-source)",
    datePublished: "Dec 23, 2023",
  }),
  new ArticleDataPoint({
    title: "Beginner's Guide to the Maths behind Machine Learning",
    subtitle:
      "Kickstart your ML journey — Essentials of Linear Algebra, Calculus and Statistics for success in ML",
    articleURL:
      "https://medium.com/@raj.pulapakura/beginners-guide-to-the-maths-behind-machine-learning-13e497af2b9c",
    thumbnailURL:
      "https://miro.medium.com/v2/resize:fit:786/format:webp/0*nijwsf72B5uq2tm5",
    tags: ["Machine Learning", "Maths", "Beginner"],
    firstPara:
      "I used to think that you didn’t need maths to get into machine learning. For a highschool student who was fascinated by ML, learning more maths was the least of my concerns.",
    datePublished: "Dec 15, 2023",
  }),
];
