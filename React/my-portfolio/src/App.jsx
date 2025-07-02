import ThemeToggle from "./components/ThemeToggle";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ThemeToggle />
      <main style={{ padding: 40 }}>
        <h1 style={{ fontSize: '3rem' }}>Merhaba Adamım Proje Başlasın</h1>
        <p>Animasyonlar, temalar ve daha fazlası geliyor</p>
      </main>

      <Contact />
    </>
  );
}

export default App;
