import ParticlesBackground from './components/ParticlesBackground';
import Landing from './sections/Landing';
import Header from './components/Header';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Research from './sections/Research';
import Skills from './sections/Skills';
import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ParticlesBackground />
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <Research />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
