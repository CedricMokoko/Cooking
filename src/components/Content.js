import Recipe from "./Recipe";
import styles from "./Content.module.scss";
import { data } from "../data/recipes";

export default function Content({ filter }) {
  const recipes = data;

  // Filtra le ricette in base allo stato del filtro
  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().startsWith(filter)
  );

  return (
    <div className={`flex-fill container p-20 ${styles.ContainerXs}`}>
      <h1 className={`my-30 ${styles.CategoriaTitle}`}>
        Le nostre nuove ricette
      </h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {filteredRecipes.map((r) => (
            <Recipe key={r._id} title={r.title} image={r.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
