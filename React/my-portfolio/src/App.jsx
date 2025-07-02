import Contact from "./pages/Contact";
import Home from './pages/Home';
import About from './pages/About';
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />

      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
