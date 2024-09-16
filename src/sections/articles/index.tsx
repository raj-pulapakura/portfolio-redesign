import ArticleItem from './components/ArticleItem';
import { articlesData } from '../../data/articles';
import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import EmblaCarouselItem from '../../shared/carousel/EmblaCarouselItem';
import PaddedContainer from '../../shared/containers/PaddedContainer';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';

export default function Articles() {
  const buttonClassName = 'text-white';

  return (
    <PaddedContainer className="bg-primary">
      <TitleSubtitleFlex
        title="ARTICLES"
        subtitle="Documenting my journey and cool tech."
        className="flex-row-reverse text-white"
      />

      <EmblaCarousel
        className="visible md:hidden"
        buttonClassName={buttonClassName}
      >
        {articlesData.map((adp) => (
          <EmblaCarouselItem key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel
        className="hidden md:block xl:hidden"
        buttonClassName={buttonClassName}
      >
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="50%" key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel
        className="hidden xl:block w-10/12 mx-auto"
        buttonClassName={buttonClassName}
      >
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </PaddedContainer>
  );
}
