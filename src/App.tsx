import Articles from './sections/articles';
import Intro from './sections/intro';
import Journey from './sections/journey';
import Outro from './sections/outro';
import PreOutro from './sections/pre-outro';
import Projects from './sections/projects';
import Separator from './sections/separators/Separator';
import Skills from './sections/skills';
import Videos from './sections/videos';

function App() {
  return (
    <main>
      <Intro />
      <Separator />
      <Skills />
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="bg-primary"
      >
        <path
          className="fill-blue-200"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        ></path>
      </svg>
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
