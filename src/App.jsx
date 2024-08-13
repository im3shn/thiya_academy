import styles from "./App.module.css";
import { Services } from "./components/Services/Services";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Services />
      <About />
    </div>
  );
}

export default App;
