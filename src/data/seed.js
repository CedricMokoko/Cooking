import { data } from "./recipes";

export async function seedRecipes() {
  //Ici on fait juste un await car on veut juste fetch(envoyer) nos données al DB. La reponse ne nous interesse pas
  await fetch("https://restapi.fr/api/mesRecettes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
