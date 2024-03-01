import Articles from "@/sections/articles";
import Intro from "@/sections/intro";
import Journey from "@/sections/journey";
import Prelude from "@/sections/prelude";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";
import Videos from "@/sections/videos";

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Journey />
      <Prelude />
      <Projects />
      <Articles />
      <Videos />
    </main>
  );
}
