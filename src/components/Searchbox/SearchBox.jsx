const SearchBox = () => {
  return (
    <div role="search-nav-open-close">
      <form className="search">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
