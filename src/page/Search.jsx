import { Container } from "react-bootstrap";
import Result from "../components/Result";
import SearchForm from "../components/SearchForm";

export default function Search() {
  return (
    <Container>
      <SearchForm />
      <hr />
      <Result />
    </Container>
  );
}
