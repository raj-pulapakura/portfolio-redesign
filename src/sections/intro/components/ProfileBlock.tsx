import { motion } from 'framer-motion';

export default function ProfileBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.25 }}
      className="bg-cream rounded-lg col-span-3 p-6"
    >
      <img
        src="/photos/profile-no-bg.png"
        className="w-full h-full object-contain "
      />
    </motion.div>
  );
}
