// pages/index.tsx

import MainCon from "./components/MainCon";

import FeatureCard from "./components/ui/FeatureCard";
import Partners from "./components/Partner";
import Footer from "./components/Footer";
import Course1 from "./components/ui/Course1";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
 
      <Navbar />
      <section id="home">
        <MainCon />
      </section>
      
      <section id="features">
        <FeatureCard />
      </section>
      
      <section id="partners">
        <Partners />
      </section>
      
      <section id="courses">
        <Course1 />
      </section>
      
      <section id="welcome">
        <Welcome />
      </section>
      
      <Footer />
    </div>

  );
}
