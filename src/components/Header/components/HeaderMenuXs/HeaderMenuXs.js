import styles from "./HeaderMenuXs.module.scss";

export default function HeaderMenuXs({ setPage }) {
  return (
    <ul className={`card p-10  ${styles.MenuContainer}`}>
      <li onClick={() => setPage("admin")} className={styles.List}>
        Add recipe
      </li>
      <li onClick={() => setPage("homepage")} className={styles.List}>
        Homepage
      </li>
      <li className={styles.List}>WishList</li>
      <li className={styles.List}>Connexion</li>
    </ul>
  );
}
