import { motion } from 'framer-motion';

export default function ProfileBlock() {
  return (
    <motion.div className="bg-cream rounded-lg col-span-3 p-10">
      <img
        src="/photos/profile-no-bg.png"
        className="w-full h-full object-contain "
      />
    </motion.div>
  );
}
