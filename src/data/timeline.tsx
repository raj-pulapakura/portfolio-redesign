import { ReactNode } from 'react';
import UnderlinedLink from '../shared/ui/UnderlinedLink';

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
    date: 'Jan 2021',
    title: 'Wrote my first line of code',
    extraInformation:
      'Discovered Python, and fell in love with programming because it enabled me to create.',
    technologies: ['Python', 'Django'],
  }),
  new TimelineDataPoint({
    date: 'Jun 2021',
    title: 'Published my first app',
    extraInformation: (
      <p>
        My first app was a simple and fun number guessing game. Check it out on
        the Play Store:{' '}
        <UnderlinedLink href="https://play.google.com/store/apps/details?id=com.numberpredictor.joyapps">
          Number Predictor
        </UnderlinedLink>
      </p>
    ),
    technologies: ['Kotlin'],
  }),
  new TimelineDataPoint({
    date: 'Sep 2021',
    title: 'Built my first website',
    extraInformation: (
      <p>
        Eager to continue building, I tapped into web development, learning
        HTML, CSS, JavaScript, React.js, Docker, SQL, MongoDB, and Docker.
      </p>
    ),
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Docker',
      'SQL',
      'MongoDB',
      'Docker',
    ],
  }),
  new TimelineDataPoint({
    date: 'Mar 2022',
    title: 'Rebuilt my first app',
    extraInformation: (
      <p>
        With the power of a Flutter, I rebuilt my first app with a new refershed
        look, incoporating a simple design language for optimal user experience.
      </p>
    ),
    technologies: ['Flutter', 'Dart'],
  }),
  new TimelineDataPoint({
    date: 'Jun 2022',
    title: 'Discovered Machine Learning',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          With the potential for AI to transform the world, I decided to focus
          my efforts on Machine Learning.
        </p>
        <p>
          Through online courses and tutorials, I discovered and learned core ML
          technologies including TensorFlow, PyTorch, NumPy, Pandas and OpenCV.
        </p>
      </div>
    ),
    technologies: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'OpenCV'],
  }),
  new TimelineDataPoint({
    date: 'Jan 2023',
    title: 'Dived into Deep Learning',
    extraInformation: (
      <p>
        Going deeper (pun intended) into Machine Learning, I learned about
        neural networks, back propagation, activation functions and various
        other DL topics. I also took an interest in computer vision technologies
        including object detection and siamese networks.
      </p>
    ),
    technologies: ['TensorFlow', 'PyTorch', 'NumPy', 'Pandas', 'OpenCV'],
  }),
  new TimelineDataPoint({
    date: 'Jul 2023',
    title: 'Taught myself Calculus',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          Realizing that a solid knowledge of calculus, linear algebra and
          probability was necessary to truly understand machine learning, I
          invested a month into learning the mathematics of ML.
        </p>
        <p>
          Fuelled by my love for maths and desire for deep understanding, I
          utilized Khan Academy courses and YouTube tutorials to teach myself
          calculus, derivatives and the backprop algorithm. Then I implemented a
          neural network from scratch.
        </p>
      </div>
    ),
    technologies: ['TensorFlow', 'NumPy'],
  }),
  new TimelineDataPoint({
    date: 'Aug 2023',
    title: 'TensorFlow Developer Exam',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          After learning calculus and TensorFlow, I knew I was ready to pass the
          TensorFlow Developer Exam, which is a 5 hour examination accredited by
          TensorFlow, to validate your skills in Machine Learning.
        </p>
        <p>
          I submitted my exam after 4 hours of starting, and a few minutes
          later, I received an email that I had passed!
        </p>
      </div>
    ),
    technologies: ['TensorFlow'],
  }),
  new TimelineDataPoint({
    date: 'Sep 2023',
    title: 'Course and Certs',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>Improving my skills and knowledge by taking 4 courses:</p>
        <ul>
          <li>• IBM Machine Learning Professional Certificate</li>
          <li>• Advanced Machine Learning on Google Cloud Certificate</li>
          <li>• Deep Learning Specialization</li>
          <li>• IBM Databases and SQL for Data Science with Python</li>
        </ul>
      </div>
    ),
    technologies: ['IBM', 'TensorFlow', 'NumPy', 'Google Cloud', 'MySQL'],
  }),
  new TimelineDataPoint({
    date: 'Dec 2023',
    title: 'Dropped out of school',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          Having taught myself programming and machine learning for over 3
          years, I am ready to get out into the market and add value to a tech
          company with my skills.
        </p>
        <p>
          With the support of my parents, I dropped about of high school after
          topping my Year 10 exams.
        </p>
        <p>Now the real journey begins.</p>
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: 'Jan 2024',
    title: 'Landed my first internship!',
    extraInformation: (
      <div>
        <p className="mb-3">
          For this internship, I worked for an{' '}
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
    date: 'Feb 2024',
    title: 'Finished my internship',
    extraInformation: (
      <div className="flex flex-col gap-2">
        <p>
          Finished my first internship and learned lots about the agricultural
          space and geospatial data. Check out my full write-up of all the
          lessons I learned
          <a
            className="font-bold"
            href="https://medium.com/@raj.pulapakura/3-lessons-from-my-swe-internship-at-a-startup-1896ad469555"
          >
            here.
          </a>
        </p>
        <p>
          As of now, I am going to continue upskilling myself and work on my
          personal projects. Also currently working towards the AWS Machine
          Learning Specialty Certificate.
        </p>
        <p>🔥 Let's keep grinding.</p>
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: 'Mar 2024',
    title: 'ClarityScan: Medical Deep Learning',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>
          For the past month, I have been building{' '}
          <UnderlinedLink href="http://clarityscan-447069715.us-east-1.elb.amazonaws.com/">
            <em>ClarityScan</em>
          </UnderlinedLink>
          , which is an app that enables radiologists to enhance brain MRI
          scans, and easily identify glioma tumors in the scans.
        </p>
        <section>
          <p>📚 Here are all the resources for the project:</p>
          <ul>
            <li>
              • 🔗{' '}
              <UnderlinedLink href="http://clarityscan-447069715.us-east-1.elb.amazonaws.com/">
                ClarityScan website
              </UnderlinedLink>
            </li>
            <li>
              • 📽️{' '}
              <UnderlinedLink href="https://www.youtube.com/watch?v=v9OmIxve9Zs">
                YT Project demo
              </UnderlinedLink>
            </li>
            <li>
              • 📽️{' '}
              <UnderlinedLink href="https://www.youtube.com/watch?v=SvfRLuvJyn8">
                YT Technical walkthrough
              </UnderlinedLink>
            </li>
            <li>
              • 📝{' '}
              <UnderlinedLink href="https://medium.com/@raj.pulapakura/how-to-build-an-end-to-end-medical-deep-learning-project-11ad932b5a8f">
                Project write-up
              </UnderlinedLink>
            </li>
          </ul>
        </section>
      </div>
    ),
  }),
  new TimelineDataPoint({
    date: 'April 2024',
    title: 'Job: Time Under Tension',
    extraInformation: (
      <div className="flex flex-col gap-5">
        <p>
          I am currently working as an AI Engineer at Time Under Tension, a
          Generative AI consultancy. My work primarily involves developing
          full-stack Generative AI applications.
        </p>
      </div>
    ),
  }),
];
