import styles from "./RecipeForm.module.scss";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../../../context/ApiContext";

function RecipeForm() {
  const BASE_URL_API = useContext(ApiContext);

  const defaultValues = {
    title: "",
    image: "",
  };

  const recipeSchema = yup.object({
    title: yup
      .string()
      .required("Le titre doit etre renseigné")
      .min(5, "Le titre doit etre explicite")
      .max(30, "Le titre doit etre succinct"),
    image: yup
      .string()
      .required("Il faut renseigner l'image")
      .url("L'image doit etre un lien valide"),
  });

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(recipeSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      const response = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset(defaultValues);
      } else {
        setError("generic", {
          type: "generic",
          message:
            "Une erreur s'est produite. Veuillez reessayer dans quelque minutes.",
        });
      }
    } catch (e) {
      setError("generic", {
        type: "generic",
        message:
          "Une erreur s'est produite. Veuillez reessayer dans quelque minutes.",
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${styles.recipeForm}`}
    >
      {" "}
      {errors.generic ? (
        <p>{errors.generic.message}</p>
      ) : (
        <>
          <h2 className="mb-20">Ajouter une recette</h2>
          <div className="d-flex flex-column mb-10">
            <label className={` ${styles.labelForm}`}>
              Titre de la recette
            </label>
            <input
              className={` ${styles.inputForm}`}
              type="text"
              placeholder="Title image here"
              {...register("title")}
            />
            {errors.title && (
              <p className={` ${styles.formError}`}>{errors.title.message}</p>
            )}
          </div>
          <div className="d-flex flex-column mb-10">
            <label className={` ${styles.labelForm}`}>
              Image pour la recette
            </label>
            <input
              className={` ${styles.inputForm}`}
              type="text"
              placeholder="link image here"
              {...register("image")}
            />
            {errors.image && (
              <p className={` ${styles.formError}`}>{errors.image.message}</p>
            )}
          </div>
          <div>
            <button disabled={isSubmitting} className="btn btn-primary mt-5">
              Sauvegarder
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default RecipeForm;
