import LinkItem from './LinkItem';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function LinksBlock() {
  return (
    <div className="bg-black border-2 border-cream rounded-lg col-span-4 flex flex-col justify-center items-center gap-6">
      <LinkItem
        icon={faLinkedin}
        text="LinkedIn"
        url="https://www.linkedin.com/in/rajpulapakura/"
      />

      <LinkItem
        icon={faYoutube}
        text="YouTube"
        url="https://www.youtube.com/@rajpulapakura001"
      />

      <LinkItem
        icon={faGithub}
        text="GitHub"
        url="https://github.com/raj-pulapakura"
      />

      <LinkItem
        icon={faMedium}
        text="Medium"
        url="https://medium.com/@raj.pulapakura"
      />
    </div>
  );
}
