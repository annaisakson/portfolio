import styles from "./CSS/App.module.css";
import { Navbar } from "./components/navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Profile />
        <About />
      </div>
    </>
  );
}

export default App;
