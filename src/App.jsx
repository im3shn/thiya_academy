import styles from "./App.module.css";
import { Services } from "./components/Services/Services";
import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { WhyUs } from "./components/WhyUs/WhyUs";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Experience /> */}
      <WhyUs />
      <Contact />
    </div>
  );
}

export default App;
