import { Container } from "react-bootstrap";
import MainCarousel from "../components/MainCarousel";
import { Link } from "react-router";

export default function MainPage() {
  return (
    <Container>
      <h2>MainPage</h2>
      <MainCarousel />
      <hr />
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/mypage">MyPage</Link>
      </div>
      <div>
        <Link to="/recipe">Recipe</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/aaaaa">404</Link>
      </div>
    </Container>
  );
}
