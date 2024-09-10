import Social from './components/Social';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UpButton from './components/UpButton';

export default function Outro() {
  const iconSize = '3x';

  return (
    <section className="bg-background py-20 lg:py-28 flex flex-col gap-10 px-10 relative">
      <div className="text-white text-center flex gap-5 lg:gap-10 2xl:gap-16 flex-col">
        <h1 className={`text-2xl lg:text-3xl 2xl:text-5xl leading-loose`}>
          LET'S CONNECT!
        </h1>
        <h2 className="text-2xl">
          If you're a technologist based in Melbourne, let's meet IRL!
        </h2>
      </div>
      <div className="flex gap-10 mx-auto max-w-96 justify-between">
        <Social
          icon={
            <FontAwesomeIcon
              icon={faLinkedin}
              color="rgb(1,122,181)"
              size={iconSize}
            />
          }
          url="https://www.linkedin.com/in/rajpulapakura/"
        />
        <Social
          icon={
            <FontAwesomeIcon
              icon={faYoutube}
              color="rgb(255,15,23)"
              size={iconSize}
            />
          }
          url="https://www.youtube.com/@rajpulapakura9119"
        />
        <Social
          icon={
            <FontAwesomeIcon icon={faMedium} color="white" size={iconSize} />
          }
          url="https://medium.com/@raj.pulapakura"
        />
        <Social
          icon={
            <FontAwesomeIcon icon={faGithub} color="white" size={iconSize} />
          }
          url="https://github.com/raj-pulapakura"
        />
      </div>
      <UpButton />
    </section>
  );
}
