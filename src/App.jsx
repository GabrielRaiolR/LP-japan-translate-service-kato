import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import Services from "./components/Services/Services.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Situations from "./components/Situations/Situations.jsx";
import Process from "./components/Process/Process.jsx";
import TalkToMe from "./components/TalkToMe/TalkToMe.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import PixSection from "./components/Pix/PixSection.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <Services />
        <CTA />
        <Situations />
        <Process />
        <TalkToMe />
        <Pricing />
        <PixSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
