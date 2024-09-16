import Articles from './sections/articles';
import Intro from './sections/intro';
import Journey from './sections/journey';
import Outro from './sections/outro';
import PreOutro from './sections/pre-outro';
import Projects from './sections/projects';
import MultiWaveSeparator from './sections/separators/MultiWaveSeparator.tsx';
import WaveSeparator from './sections/separators/WaveSeparator.tsx';
import Skills from './sections/skills';

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
      <WaveSeparator
        topFillColor="fill-background"
        bottomBackgroundColor="bg-primary"
      />

      <Articles />
      <MultiWaveSeparator
        backgroundColor="bg-[#669dd5]"
        firstFillColor="fill-primary"
        secondFillColor="fill-blue-700"
        thirdFillColor="fill-indigo-600"
      />
    </main>
  );
}

export default App;
