import WaterBackground from "../components/Baptism/WaterBackground";
import Hero from "../components/Baptism/Hero";
import Meaning from "../components/Baptism/Meaning";
import Verse from "../components/Baptism/Verse";
import NewLife from "../components/Baptism/NewLife";
import Footer from "../components/Baptism/Footer";

export default function Baptism() {
  return (
    <main className="baptism-page">
      <WaterBackground />

      <div className="baptism-content">
        <Hero />
        <Meaning />
        <Verse />
        <NewLife />
        <Footer />
      </div>
    </main>
  );
}