import styles from "./CSS/App.module.css";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Exp } from "./components/Exp";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Profile />
        <About />
        <Exp />
      </div>
    </>
  );
}

export default App;
