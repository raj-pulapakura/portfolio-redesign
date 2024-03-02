import IconButton from "@/shared/IconButton";
import React from "react";
// h-lvh w-full object-cover
export default function Prelude() {
  return (
    <section className="relative">
      <img src="/photos/landscape2.jpg" className="h-lvh w-full object-cover" />
      <div className="absolute top-0 left-0 w-full p-5">
        <h1 className="text-6xl  text-white  font-bold text-wrap">
          I'm a <span className="text-indigo-600">CREATOR</span> at heart.
        </h1>
        <h2 className="text-5xl mt-10 text-white  font-bold text-wrap">
          Whether it’s projects, articles, or videos, I'm always{" "}
          <span className="text-yellow-600">building</span> something.
        </h2>
      </div>

      <IconButton className="p-2 w-10 h-10 absolute bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
