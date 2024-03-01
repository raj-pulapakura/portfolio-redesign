export class TimelineDataPoint {
  date: string;
  title: string;
  extraInformation: string;
  technologies?: string[];

  constructor({
    date,
    title,
    extraInformation,
    technologies,
  }: {
    date: string;
    title: string;
    extraInformation: string;
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
    date: "Jan 2021",
    title: "Wrote my first line of code in Python",
    extraInformation:
      "Discovered programming, and fell in love with it because it gave me the ability to BUILD.",
    technologies: ["Python", "Django"],
  }),
  new TimelineDataPoint({
    date: "Jun 2021",
    title: "Published my first app on the Google Play Store",
    extraInformation:
      "My first app was a simple and fun number guessing game. Check it out on the Play Store: ",
    technologies: ["Kotlin"],
  }),
  new TimelineDataPoint({
    date: "Sep 2021",
    title: "Built my first website",
    extraInformation:
      "Discovering the wonderful world of web dev, I learned HTML, CSS, JavaScript, React.js, Docker, SQL, MongoDB, and Docker.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Docker",
      "SQL",
      "MongoDB",
      "Docker",
    ],
  }),
  new TimelineDataPoint({
    date: "Mar 2022",
    title: "Rebuilt my first app using Flutter and Dart",
    extraInformation:
      "With the power of a cross-platform framework, I rekindled my mobile development fire and rebuilt my first app with a new refershed look.",
    technologies: ["Flutter", "Dart"],
  }),
  new TimelineDataPoint({
    date: "Jun 2022",
    title: "Discovering Machine Learning",
    extraInformation:
      "With the potential for AI to transform the world, I decided to focus my efforts on Machine Learnings",
    technologies: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "OpenCV"],
  }),
  new TimelineDataPoint({
    date: "Jan 2023",
    title: "Dived into Deep Learning and Computer Vision",
    extraInformation:
      "I'm a sucker for visual programming, so my interested was piqued with object detection and computer vision.",
    technologies: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "OpenCV"],
  }),
  new TimelineDataPoint({
    date: "Jul 2023",
    title: "Taught myself Differential Calculus",
    extraInformation:
      "Realizing that calculus, linear algebra and probability were powering some of the fundamental algorithms of ML and DL, I invested a month into learning the mathematics of ML. Using Khan Academy courses and YouTube videos, I taught myself calculus, derivatives and the backprop algorithm. Then I implemented a neural network from scratch.",
    technologies: ["TensorFlow", "NumPy"],
  }),
  new TimelineDataPoint({
    date: "Aug 2023",
    title: "Passed the TensorFlow Developer Exam",
    extraInformation:
      "After learning calculus and mastering TensorFlow, I thought I was ready to pass the TensorFlow Developer Exam, which is a 5 hour examination accredited by TensorFlow, to validate your skills in Machine Learning. I submitted my exam after 4 hours of starting, and a few minutes later, I received an email that I had passed!",
    technologies: ["TensorFlow"],
  }),
  new TimelineDataPoint({
    date: "Sep 2023",
    title: "Course and Certs",
    extraInformation:
      "Improving my skills and knowledge by taking 4 courses. 1) IBM Machine Learning Professional Certificate, 2) Advanced Machine Learning on Google Cloud Certificate, 3) Deep Learning Specialization Certificate, 4) Databases and SQL for Data Science with Python",
    technologies: ["IBM", "TensorFlow", "NumPy", "Google Cloud", "MySQL"],
  }),
  new TimelineDataPoint({
    date: "Dec 2023",
    title: "Dropped out of school",
    extraInformation:
      "Having learned programming and machine learning for over 2 years, I was ready to start adding value to a company. With the support of my parents, I decided to drop out of school after finishing my Year 10 exams. Now the real journey begins.",
  }),
  new TimelineDataPoint({
    date: "Jan 2024",
    title: "Landed my first internship!",
    extraInformation: `For this internship, my primary focus was building A.I.GORITHM's Property Report Tool.

• Developed and deployed a Property Report Generation Tool which enables farmers to get detailed agricultural reports pertaining to their geographical AOI (area of interest).
• Pooled and organized geospatial data from several APIs and data sources to provide agricultural analytics to farmers.
• Employed microservices architecture to develop APIs/services and a user-facing website.
• Automated deployment via GitHub Actions CI/CD pipeline and Terraform IaC (Infrastructure as Code), to provision AWS resources.`,
    technologies: [
      "Next.JS",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "NumPy",
      "Pandas",
      "GeoPandas",
      "SendGrid",
      "Terraform",
      "Docker",
      "AWS",
    ],
  }),
];
