import styles from "./HeaderMenuXs.module.scss";

export default function HeaderMenuXs() {
  return (
    <ul className={`card p-10  ${styles.MenuContainer}`}>
      <li className={styles.List}>WishList</li>
      <li className={styles.List}>Connexion</li>
    </ul>
  );
}
