import styles from "./CSS/App.module.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Exp } from "./components/Exp";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { BigProjects } from "./components/BigProjects";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Profile />
        <Exp />
        <BigProjects />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
