import styles from "./Header.module.scss";
import logos from "../assets/images/cookingLogo.jpg";

export default function Header() {
  return (
    <header className={`${styles.header} d-flex align-items-center flex-row `}>
      <div className="flex-fill">
        <img src={logos} alt="cookingLogo" />
      </div>
      <i className={`fa-solid fa-bars ${styles.iconMenu}`}></i>
      <ul>
        <button className="mr-10 btn btn-primary-reverse">
          <i className="fa-solid fa-cart-shopping mr-5"></i>
          <span>Carrello</span>
        </button>
        <button className="btn btn-primary">Log in</button>
      </ul>
    </header>
  );
}
