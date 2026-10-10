import SearchBar from './SearchBar';

export default function Header({ search, onSearchChange }) {
  return (
    <header className="header">
      <h1>MaBoutique</h1>

      <SearchBar search={search} onSearchChange={onSearchChange} />
    </header>
  );
}
