import ThemeToggle from "./components/ThemeToggle";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <ThemeToggle />

      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
