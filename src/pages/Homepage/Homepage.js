import Loading from "../../components/Loading/Loading";
import { ApiContext } from "../../context/ApiContext";
import Recipe from "./components/Recipe/Recipe";
import styles from "./Homepage.module.scss";
import { useContext, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

export default function Homepage({ filter }) {
  const BASE_URL_API = useContext(ApiContext);
  const [page, setPage] = useState(1);
  const [[recipes, setRecipes], isLoading] = useFetchData(BASE_URL_API, page);
  // Filtra le ricette in base allo stato del filtro
  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().startsWith(filter)
  );
  //Function pour notifier les modification faites par le composant Recipe.js sur les recettes
  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r))
    );
  }
  //Function pour charger plus de recette
  function handleClickLoadMoreRecipes() {
    setPage(page + 1);
  }
  //Function pour delete une recette
  function deleteRecipe(_id) {
    setRecipes(recipes.filter((r) => r._id !== _id));
  }

  return (
    <div
      className={`d-flex flex-column flex-fill container p-20 ${styles.ContainerXs}`}
    >
      {isLoading && !recipes.length ? (
        <Loading />
      ) : (
        <>
          <h1 className={`my-30 ${styles.CategoriaTitle}`}>
            Le nostre nuove ricette{" "}
            <small className={styles.small}>({recipes.length})</small>
          </h1>
          <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
            {filteredRecipes.length > 0 ? (
              <>
                <div className={styles.grid}>
                  {filteredRecipes.map((r) => (
                    <Recipe
                      key={r._id}
                      recipe={r}
                      deleteRecipe={deleteRecipe}
                      toggleLikeRecipe={updateRecipe}
                    />
                  ))}
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center my-30">
                  <button
                    onClick={handleClickLoadMoreRecipes}
                    className="btn btn-primary"
                  >
                    More recipes
                  </button>
                </div>
              </>
            ) : (
              <p style={{ color: "red" }}>Nessuna ricetta trovata.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
