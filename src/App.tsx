import { Hero } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen bg-gray-50 font-poppins">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
