"use client";

import React from "react";
import GridSmall from "./components/GridSmall";
import GridLarge from "./components/GridLarge";

export default function Skills() {
  return (
    <section className="py-10 md:px-10">
      <div className="visible lg:hidden">
        <GridSmall />
      </div>

      <div className="hidden lg:block">
        <GridLarge />
      </div>
    </section>
  );
}
