import Articles from './sections/articles';
import Intro from './sections/intro';
import Journey from './sections/journey';
import Outro from './sections/outro';
import PreOutro from './sections/pre-outro';
import Projects from './sections/projects';
import MultiWaveSeparator from './sections/separators/MultiWaveSeparator.tsx';
import WaveSeparator from './sections/separators/WaveSeparator.tsx';
import Skills from './sections/skills';
import Videos from './sections/videos';

function App() {
  return (
    <main>
      <Intro />
      <MultiWaveSeparator />

      <Skills />
      <WaveSeparator />

      <Journey />
      <MultiWaveSeparator
        backgroundColor="bg-background"
        firstFillColor="fill-gray-900"
        secondFillColor="fill-blue-500"
        thirdFillColor="fill-blue-600"
      />

      <Projects />
      <Articles />
      <Videos />
      <PreOutro />
      <Outro />
    </main>
  );
}

export default App;
