import { Container } from "react-bootstrap";
import RecipeTop from "../components/RecipeTop";
import RecipeMain from "../components/RecipeMain";

export default function Recipe() {
  return (
    <Container>
      <RecipeTop />
      <hr />
      <RecipeMain />
    </Container>
  )
}