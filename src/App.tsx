import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "components/auth/login";
import Layout from "components/layout/Layout";
import ShoppingCart from "components/pages/Cart";
import Compare from "components/pages/Compare";
import Faq from "components/pages/Faq";
import ProductListComponent from "components/pages/Products";
import Wishlist from "components/pages/Wishlist";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element="" />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/products" element={<ProductListComponent />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
