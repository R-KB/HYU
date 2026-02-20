import { Button } from "react-bootstrap";

export default function SearchForm() {
  return (
    <>
      <h2>Search</h2>
      <hr />
      <form>
        <div>
          <label htmlFor="keyword">keyword search</label>
          <input type="text" id="keyword" />
          <input type="submit" />
          <img src="public/img/search.svg" alt="" />
        </div>
      </form>
      <Button>HYU</Button>
    </>
  );
}
