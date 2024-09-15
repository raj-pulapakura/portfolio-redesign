import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MotionProps, motion } from 'framer-motion';

export default function LeadContent() {
  const leadContentAnimation: MotionProps = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: {
      duration: 1,
    },
    viewport: { once: true },
  };

  return (
    <motion.div
      {...leadContentAnimation}
      className="border-background border-2 h-fit p-10 relative rounded-lg"
    >
      <p className="text-accent font-display opacity-80 text-5xl">
        See how I apply these skills in real-world projects
      </p>

      {/* Corner pieces */}
      <div className="absolute -top-5 -right-5 w-10 h-10 border-b-2 border-l-2 border-background rounded-bl-lg"></div>
      <div className="absolute -bottom-5 -left-5 w-10 h-10 border-t-2 border-r-2 border-background rounded-tr-lg"></div>
      <div className="absolute -top-5 -left-5 w-10 h-10 border-b-2 border-r-2 border-background rounded-br-lg"></div>
      <div className="absolute -bottom-5 -right-5 w-10 h-10 border-t-2 border-l-2 border-background rounded-tl-lg"></div>

      {/* Border pieces */}
      <div className="absolute -bottom-5 right-5 w-[calc(100%-40px)]  border-t-2 border-background"></div>
      <div className="absolute -top-5 right-5 w-[calc(100%-40px)] border-t-2 border-background"></div>
      <div className="absolute top-5 -left-5 h-[calc(100%-40px)] border-l-2 border-background"></div>
      <div className="absolute top-5 -right-5 h-[calc(100%-40px)] border-l-2 border-background"></div>

      {/* Corner screws */}
      <div className="absolute -top-5 -left-5 w-3 h-3 border-2 border-background rounded-full"></div>
      <div className="absolute -top-5 -right-5 w-3 h-3 border-2 border-background rounded-full"></div>
      <div className="absolute -bottom-5 -left-5 w-3 h-3 border-2 border-background rounded-full"></div>
      <div className="absolute -bottom-5 -right-5 w-3 h-3 border-2 border-background rounded-full"></div>
    </motion.div>
  );
}
