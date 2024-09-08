import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import EmblaCarouselItem from '../../shared/carousel/EmblaCarouselItem';
import PaddedContainer from '../../shared/containers/PaddedContainer';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';
import VideoItem from './components/VideoItem';

export default function Videos() {
  // const videos = await getVideos();

  return (
    <PaddedContainer style={{ backgroundColor: 'rgb(141,192,235)' }}>
      {/* <TitleSubtitleFlex
        title="VIDEOS"
        subtitle="Tech & project demos, and positive vibes."
      />
      <EmblaCarousel className="visible md:hidden">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="100%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block xl:hidden">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="50%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden xl:block">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel> */}
    </PaddedContainer>
  );
}
