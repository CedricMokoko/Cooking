import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./App.module.scss";

function App() {
  const [filter, setFilter] = useState(""); // State per il filtro

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header onFilterChange={setFilter} />
      <Content filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
