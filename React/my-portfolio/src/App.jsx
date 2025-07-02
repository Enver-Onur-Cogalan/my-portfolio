import ThemeToggle from "./components/ThemeToggle";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import About from './pages/About';
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <ThemeToggle />

      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
