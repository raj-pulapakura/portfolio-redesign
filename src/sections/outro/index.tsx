import { rockSalt } from "@/app/layout";
import Profile from "@/shared/Profile";
import React from "react";
import Social from "./components/Social";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Outro() {
  const iconSize = "3x";

  return (
    <section className="bg-black py-20">
      <h1
        className={`${rockSalt.className} text-5xl text-white text-center leading-loose`}
      >
        LET'S CONNECT!
      </h1>
      <div className="mt-10 flex w-full px-10 justify-between">
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
    </section>
  );
}
