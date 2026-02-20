import { Outlet } from "react-router";
import Footer from "./common/Footer";
import Header from "./common/Header";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
