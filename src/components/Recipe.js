import { useState } from "react";
import styles from "./Recipe.module.scss";

export default function Recipe({ title, image }) {
  const [liked, setLiked] = useState(false);
  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe1" />
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
