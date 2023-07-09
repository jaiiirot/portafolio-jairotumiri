import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import Recursos from "./pages/Recursos";
import ItemLayout from "./components/ItemLayout/ItemLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="jairotumiri" element={<ItemLayout />}>
            <Route index element={<Home />} />
            <Route path="Portafolio/" element={<Portafolio />} />
            <Route path="Recursos/" element={<Recursos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
