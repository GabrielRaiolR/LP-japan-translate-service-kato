import styles from "./App.module.scss";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import Situations from "./components/Situations/Situations.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Process from "./components/Process/Process.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import PixSection from "./components/Pix/PixSection.jsx";
import TalkToMe from "./components/TalkToMe/TalkToMe.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Benefits />
        <Pricing />
        <Process />
        <TalkToMe />
        <PixSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
