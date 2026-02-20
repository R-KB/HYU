import { Container } from "react-bootstrap";

export default function Search() {
  return (
    <Container>
      <h2>Search</h2>
      <hr />
      <form>
        <div>
          <label htmlFor="keyword">keyword search</label>
          <input type="text" id="keyword" />
          <input type="submit" />
        </div>
      </form>
    </Container>
  );
}
