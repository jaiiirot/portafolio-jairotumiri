import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import Recursos from "./pages/Recursos";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Portafolio/" element={<Portafolio />} />
            <Route path="Recursos/" element={<Recursos />} />
            <Route path="*" element={<h2>ERROR</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}