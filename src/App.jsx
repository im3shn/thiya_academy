import styles from "./App.module.css";
import { Services } from "./components/Services/Services";
import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Courses } from "./components/Courses/Courses";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Services />
      {/* <Experience /> */}
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
