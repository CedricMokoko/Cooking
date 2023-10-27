import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../../context/ApiContext";

export default function Recipe({
  recipe: { _id, title, liked, image },
  toggleLikeRecipe,
  deleteRecipe,
}) {
  const BASE_URL_API = useContext(ApiContext);

  async function handleClickLike() {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });
      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikeRecipe(updatedRecipe);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleClickDelete(e) {
    e.stopPropagation();
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        deleteRecipe(_id);
      }
    } catch (e) {
      console.log("Error");
    }
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div
        className={` ${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h4 className={"mr-15"}>{title}</h4>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
}
