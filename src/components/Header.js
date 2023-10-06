import React, { useState } from "react";
import styles from "./Header.module.scss";
import logos from "../assets/images/cookingLogo.jpg";
import HeaderMenuXs from "./HeaderMenuXs";

export default function Header({ onFilterChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const newFilter = e.target.value.trim().toLowerCase();
    setFilter(newFilter); // Aggiorno lo stato del filtro
    onFilterChange(newFilter); // Notifico al componente genitore il cambio del filtro
  }

  return (
    <header
      className={`${styles.header} d-flex justify-content-space-b align-items-center flex-row `}
    >
      <div className={`${styles.imgContainer} mr-15`}>
        <img src={logos} alt="cookingLogo" />
      </div>
      <div
        className={`${styles.SearchBar} flex-fill d-flex flex-row justify-content-center align-items-center `}
      >
        <i className="fa-solid fa-magnifying-glass mr-15"></i>
        <input
          className="flex-fill"
          type="text"
          placeholder="Cerca"
          onChange={handleInput}
        />
      </div>
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`fa-solid fa-bars ${styles.iconMenu}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenuXs />
        </>
      )}
      <ul className={styles.headerList}>
        <button className="mr-10 btn btn-primary-reverse">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Log in</button>
      </ul>
    </header>
  );
}
