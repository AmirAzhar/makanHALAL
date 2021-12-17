import searchStyles from "/styles/Searchbar.module.css";

const Searchbar = () => (
  <form>
    <input
      className={searchStyles["search-bar"]}
      type="text"
      id="search-location"
      placeholder="Search food places"
    />
  </form>
);

export default Searchbar;
