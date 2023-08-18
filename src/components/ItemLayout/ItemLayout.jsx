import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function ItemLayout() {
  return (
    <>
      <div id="particles-js">
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
