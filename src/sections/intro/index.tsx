import IconButton from "@/shared/IconButton";
import Profile from "@/shared/Profile";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Intro() {
  return (
    <section className="relative h-lvh">
      <img
        src="/photos/landscape1.jpg"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h1 className="text-7xl  text-white  text-center font-bold text-wrap">
          Hey there, I'm Raj!
        </h1>
        <Profile useCircle={true} className="w-1/2 mx-auto mt-10" />
      </div>

      <IconButton
        icon={faChevronDown}
        className="p-2 w-10 h-10 absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
