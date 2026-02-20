import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <h2>Login</h2>
      <hr />
      <form>
        <div>
          <label htmlFor="id">login id</label>
          <input type="text" id="id" />
        </div>
        <div>
          <label htmlFor="pass">password</label>
          <input type="password" id="pass" />
        </div>
        <input type="submit" value="login" />
      </form>
    </Container>
  );
}
