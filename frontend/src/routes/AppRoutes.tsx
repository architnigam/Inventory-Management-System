import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/mainlayout";
import Dashboard from "../pages/dash/dash";
import Products from "../pages/products/products";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;