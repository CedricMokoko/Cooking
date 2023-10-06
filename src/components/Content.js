import Recipe from "./Recipe";
import styles from "./Content.module.scss";
import { data } from "../data/recipes";

export default function Content() {
  const recipes = data;
  return (
    <div className={`flex-fill container p-20 ${styles.ContainerXs}`}>
      <h1 className={`my-30 ${styles.CategoriaTitle}`}>
        Le nostre nuove ricette
      </h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes.map((r) => (
            <Recipe key={r._id} title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
