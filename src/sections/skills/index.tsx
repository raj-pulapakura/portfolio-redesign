"use client";

import React from "react";
import GridSmall from "./components/GridSmall";
import GridLarge from "./components/GridLarge";
import GridXLarge from "./components/GridXLarge";

export default function Skills() {
  return (
    <section className="px-0 py-10 md:px-10 md:py-20 lg:px-16 lg:py-32">
      <div className="visible lg:hidden">
        <GridSmall />
      </div>

      <div className="hidden lg:block 2xl:hidden">
        <GridLarge />
      </div>

      <div className="hidden 2xl:block">
        <GridXLarge />
      </div>
    </section>
  );
}
