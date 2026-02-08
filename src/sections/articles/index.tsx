import Marquee from 'react-fast-marquee';
import ArticleItem from './components/ArticleItem';
import { articlesData } from '../../data/articles';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import Chip from '../../shared/ui/Chip';

const marqueeTags = Array.from(
  new Set(articlesData.flatMap((article) => article.tags))
).slice(0, 12);
const featuredArticles = articlesData.slice(0, 4);

export default function Articles() {
  return (
    <SectionShell
      id="articles"
      backgroundClassName="bg-background"
      className="py-24"
    >
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Articles
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            Selected writing on AI systems and engineering.
          </h2>
          <p className="text-secondary max-w-3xl">
            Technical deep dives on ML engineering, LLM systems, and software
            architecture.
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-muted/60 py-3">
          <Marquee speed={40} gradient={false} pauseOnHover>
            <div className="flex gap-4">
              {marqueeTags.map((tag) => (
                <Chip key={`marquee-${tag}`} className="text-[0.6rem]">
                  {tag}
                </Chip>
              ))}
            </div>
          </Marquee>
        </div>

        <AccentDivider />

        <div className="space-y-6">
          {featuredArticles.map((adp) => (
            <ArticleItem key={adp.title} articleDataPoint={adp} />
          ))}
        </div>

        <a
          href="https://medium.com/@raj.pulapakura"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-secondary transition hover:border-accent hover:text-primary"
        >
          View all writing on Medium
        </a>
      </div>
    </SectionShell>
  );
}
