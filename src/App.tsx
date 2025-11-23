import Articles from './sections/articles';
import Intro from './sections/intro';
import Journey from './sections/journey';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Outro from './sections/outro';

function App() {
  return (
    <main className="bg-background text-primary">
      <Intro />
      <Skills />
      <Journey />
      <Projects />
      <Articles />
      <Outro />
    </main>
  );
}

export default App;
