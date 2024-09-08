import LinkItem from './LinkItem';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

export default function LinksBlock() {
  return (
    <div className=" border-2 border-cream rounded-lg col-span-6 flex justify-center items-center">
      <div className="grid grid-cols-2 w-fit gap-10">
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
    </div>
  );
}
