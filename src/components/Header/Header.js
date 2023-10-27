import React, { useState } from "react";
import styles from "./Header.module.scss";
import logos from "../../assets/images/cookingLogo.jpg";
import HeaderMenuXs from "./components/HeaderMenuXs/HeaderMenuXs";
import Search from "../../pages/Homepage/components/Search/Search";

export default function Header({ onFilterChange, setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`${styles.header} d-flex justify-content-space-b align-items-center flex-row `}
    >
      <div className={`${styles.imgContainer} mr-15`}>
        <img
          onClick={() => setPage("homepage")}
          src={logos}
          alt="cookingLogo"
        />
      </div>
      <Search onFilterChange={onFilterChange}></Search>
      <i
        onClick={() => setShowMenu(!showMenu)}
        className={`fa-solid fa-bars ${styles.iconMenu}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenuXs setPage={setPage} />
        </>
      )}
      <ul className={styles.headerList}>
        <button
          onClick={() => setPage("admin")}
          className="btn btn-primary mr-10"
        >
          Add recipe
        </button>

        <button className="mr-10 btn btn-primary-reverse">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Log in</button>
      </ul>
    </header>
  );
}
