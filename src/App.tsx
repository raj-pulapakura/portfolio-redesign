import Articles from './sections/articles';
import Intro from './sections/intro';
import Journey from './sections/journey';
import Outro from './sections/outro';
import PreOutro from './sections/pre-outro';
import Projects from './sections/projects';
import IntroSkillSeparator from './sections/separators/IntroSkillSeparator.tsx';
import SkillJourneySeparator from './sections/separators/SkillJourneySeparator.tsx';
import Skills from './sections/skills';
import Videos from './sections/videos';

function App() {
  return (
    <main>
      <Intro />
      <IntroSkillSeparator />

      <Skills />
      <SkillJourneySeparator />

      <Journey />
      <Projects />
      <Articles />
      <Videos />
      <PreOutro />
      <Outro />
    </main>
  );
}

export default App;
