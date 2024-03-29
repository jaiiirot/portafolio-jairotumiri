import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function ItemLayout() {
  return (
    <>
      <NavBar />
      <main className="text-white m-auto flex-center-center flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
