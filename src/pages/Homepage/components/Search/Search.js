import styles from "./Search.module.scss";

export default function Search({ onFilterChange }) {
  function handleInput(e) {
    const newFilter = e.target.value.trim().toLowerCase();
    onFilterChange(newFilter); // Notifico il componente genitore il cambio del filtro
  }
  return (
    <div
      className={`${styles.SearchBar}  d-flex flex-row justify-content-center align-items-center `}
    >
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
        className="flex-fill"
        type="text"
        placeholder="Cerca"
        onChange={handleInput}
      />
    </div>
  );
}
