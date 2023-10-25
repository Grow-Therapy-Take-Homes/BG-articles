import Navigation from "../Navigation";
import { TopArticles } from "../TopArticles";
import styles from "./styles.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.title}>Top Wikipedia articles</h1>
        <TopArticles />
      </div>
    </div>
  );
}
