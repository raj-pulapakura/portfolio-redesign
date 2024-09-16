import ArticleItem from './components/ArticleItem';
import { articlesData } from '../../data/articles';
import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

export default function Articles() {
  const buttonClassName = 'text-white';

  return (
    <div className="bg-primary pb-32">
      <div id="articles" className="h-20 w-full"></div>

      <TitleSubtitleFlex
        title="ARTICLES"
        subtitle="Documenting my journey and cool tech."
        className="text-white mb-20"
        icon={faNewspaper}
      />

      <EmblaCarousel
        className="w-10/12 mx-auto "
        buttonClassName={buttonClassName}
      >
        {articlesData.map((adp) => (
          <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
        ))}
      </EmblaCarousel>
    </div>
  );
}
