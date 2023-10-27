import React, { useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
//import { seedRecipes } from "./data/seed";

/*Pour envoyer notre tableau de recettes dans le DB "https://restapi.fr/api/mesRecettes"
Cependant c'est à commenté une fois l'app lancée et aggiornée 3/4 fois pour avoir une 
quantité consistante de données, anche se duplicate inizialmente*/
//seedRecipes();

function App() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} onFilterChange={setFilter} />
      {page === "homepage" && <Homepage filter={filter} />}
      {/* Pseudoo systeme de routine */}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
