import { Container } from "react-bootstrap";

export default function Register() {
  return (
    <Container>
      <h3>Register</h3>
      <hr />
      <form>
        <div>
          <label htmlFor="id">User ID</label>
          <input type="text" id="id" />
        </div>
        <div>
          <label htmlFor="name">表示名</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="pass">パスワード</label>
          <input type="password" id="pass" />
        </div>
        <div>
          <label htmlFor="checkPass">確認用</label>
          <input type="password" id="chackPass" />
        </div>
        <input type="submit" />
      </form>
    </Container>
  );
}
