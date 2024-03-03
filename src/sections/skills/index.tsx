"use client";

import React from "react";
import GridSmall from "./components/GridSmall";
import GridLarge from "./components/GridLarge";
import GridXLarge from "./components/GridXLarge";

export default function Skills() {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
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
