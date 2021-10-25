import React from "react";
import Introduction from "./components/Introduction/Introduction";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Statistic from "./components/Statistic/Statistic";
import Plans from "./components/Plans/Plans";
import Network from "./components/Network/Network";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";
import styles from "../src/styles/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header />
      </header>
      <main>
        <Introduction />
        <Statistic />
        <Features />
        <Plans />
        <Network />
        <Partners />
        <Reviews />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
