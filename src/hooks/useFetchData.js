import { useEffect, useState } from "react";

export default function useFetchData(url, page) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  //Réquete Http avec fetch()
  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        const queryParam = new URLSearchParams();
        if (page) {
          //Queries pour afficher che 9 recettes à la fois
          queryParam.append("limit", 9);
          queryParam.append("skip", (page - 1) * 9);
          queryParam.append("sort", "createdAt:-1"); //Ici pour ordine di aggiunta
        }
        const response = await fetch(url + `?${queryParam}`);
        if (response.ok && !cancel) {
          const newData = await response.json();
          setData(
            (
              x //function d'update
            ) => (Array.isArray(newData) ? [...x, ...newData] : [...x, newData])
          );
        }
      } catch (e) {
        console.log("Error");
        setError("Error");
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (cancel = true); //Function de cleanUp
  }, [url, page]);

  return [[data, setData], isLoading, error];
}
