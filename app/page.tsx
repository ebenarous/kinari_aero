import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hardware from './components/Hardware';
import Capabilities from './components/Capabilities';
import Demo from './components/Demo';
import Deploy from './components/Deploy';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Hardware />
        <Capabilities />
        <Demo />
        <Deploy />
      </main>
      <Footer />
    </div>
  );
}
