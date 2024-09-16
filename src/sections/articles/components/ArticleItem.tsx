'use client';

import { motion } from 'framer-motion';
import { ArticleDataPoint } from '../../../data/articles';

export default function ArticleItem({
  articleDataPoint: adp,
}: {
  articleDataPoint: ArticleDataPoint;
}) {
  return (
    <motion.a
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      href={adp.articleURL}
      className="grow-0 shrink-0 basis-1/3 p-5"
    >
      <div className="bg-white rounded-lg shadow-lg h-full">
        <img
          className={`rounded-t-lg h-48 md:h-52 lg:h-56 xl:h-60 2xl:h-64 w-full object-cover`}
          src={adp.thumbnailURL}
        />
        <div className="p-10">
          <p className="text-sm lg:text-md tracking-widest text-primary font-bold mb-2 md:mb-3 lg:mb-4 2xl:mb-5 font-sans">
            {adp.datePublished}
          </p>
          <h1 className="text-md xl:text-lg 2xl:text-xl font-bold mb-3 md:mb-4 lg:mb-5 font-sans">
            {adp.title}
          </h1>
          <p className="relative text-md xl:text-lg mb-1 font-sans">
            {adp.firstPara.slice(0, 120) + '...'}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
