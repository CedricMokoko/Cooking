import styles from "./Header.module.scss";
import logos from "../assets/images/cookingLogo.jpg";
import { useState } from "react";
import HeaderMenuXs from "./HeaderMenuXs";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

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
        <input className="flex-fill" type="text" placeholder="Search" />
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
