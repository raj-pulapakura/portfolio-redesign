import ProfileBlock from './components/ProfileBlock';
import LinksBlock from './components/LinksBlock';
import TitleBlock from './components/TitleBlock';
import LocationBlock from './components/LocationBlock';
import NavBlock from './components/NavBlock';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.25 }}
      className="relative min-h-screen max-h-screen w-full p-5 md:p-10 bg-black grid gap-6 grid-rows-2"
      style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
    >
      <ProfileBlock />
      <TitleBlock />
      <LocationBlock />
      <LinksBlock />
      <NavBlock />
    </motion.div>
  );
}
