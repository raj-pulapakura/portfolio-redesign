'use client';

import { motion } from 'framer-motion';
import { ArticleDataPoint } from '../../../data/articles';
import Chip from '../../../shared/ui/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function ArticleItem({
  articleDataPoint: adp,
}: {
  articleDataPoint: ArticleDataPoint;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      href={adp.articleURL}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-6 rounded-[32px] border border-white/5 bg-surface/60 p-6 transition hover:border-accent"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/3">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={adp.thumbnailURL}
              alt={adp.title}
              className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-secondary">
            {adp.datePublished}
          </p>
          <h3 className="text-2xl font-semibold text-primary">{adp.title}</h3>
          <p className="text-secondary text-sm leading-relaxed">
            {adp.firstPara.slice(0, 160)}...
          </p>
          <div className="flex flex-wrap gap-2">
            {adp.tags.map((tag) => (
              <Chip key={`${adp.title}-${tag}`} className="text-[0.6rem]">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-secondary">
        <span>Read on Medium</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-accent" />
      </div>
    </motion.a>
  );
}
