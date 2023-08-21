import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import Recursos from "./pages/Recursos";
import ItemLayout from "./components/ItemLayout/ItemLayout";
import { ParticlesBackground } from "./components/ParticlesBackground/ParticlesBackground";

export default function App() {
  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemLayout />}>
            <Route index element={<Home />} />
            <Route path="portafolio/" element={<Portafolio />} />
            <Route path="recursos/" element={<Recursos />} />
            <Route path="*" element={<h2>ERROR</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
