import Marquee from 'react-fast-marquee';
import ArticleItem from './components/ArticleItem';
import { articlesData } from '../../data/articles';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import Chip from '../../shared/ui/Chip';

const marqueeTags = Array.from(
  new Set(articlesData.flatMap((article) => article.tags))
).slice(0, 12);

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
            Documenting my journey and cool tech.
          </h2>
          <p className="text-secondary max-w-3xl">
            Deep dives, post-mortems, and notes from the path — written for
            builders.
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
          {articlesData.map((adp) => (
            <ArticleItem key={adp.title} articleDataPoint={adp} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
