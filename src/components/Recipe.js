import styles from "./Recipe.module.scss";

export default function Recipe({ linkImg }) {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={linkImg} alt="recipe1" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>La minestra</h3>
      </div>
    </div>
  );
}
