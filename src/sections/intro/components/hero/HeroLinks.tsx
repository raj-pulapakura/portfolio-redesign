import {
  faLinkedin,
  faGithub,
  faYoutube,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SocialItem from "../SocialItem";

export default function HeroLinks() {
  return (
    <div className="w-fit flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
      <SocialItem icon={faEnvelope} text="raj.pulapakura@gmail.com" />
      <SocialItem
        icon={faLinkedin}
        text="raj-pulapakura"
        url="https://www.linkedin.com/in/rajpulapakura/"
      />
      <SocialItem
        icon={faGithub}
        text="raj-pulapakura"
        url="https://github.com/raj-pulapakura/"
      />
      <SocialItem
        icon={faYoutube}
        text="@rajpulapakura9119"
        url="https://www.youtube.com/@rajpulapakura9119"
      />
      <SocialItem
        icon={faMedium}
        text="@raj.pulapakura"
        url="https://medium.com/@raj.pulapakura"
      />
    </div>
  );
}
