import css from './Search.module.css';
const Searchbar = ({ onSubmitSearchBar, value }) => (
  <div className={css.wrapSearch}>
    <form className={css.wrapForm} onSubmit={onSubmitSearchBar}>
      <input
        className={css.wrapInput}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search movies"
      />
      <button className={css.wrapBtn}>
        <span>Search</span>
      </button>
    </form>
  </div>
);

export default Searchbar;
