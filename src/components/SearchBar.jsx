export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="search"
      placeholder="Rechercher..."
      aria-label="Rechercher un produit"
      value={search}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}
