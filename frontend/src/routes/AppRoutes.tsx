import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dash/dash";
import Products from "../pages/products/products";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;