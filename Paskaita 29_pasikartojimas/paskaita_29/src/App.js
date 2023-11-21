import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import EditProduct from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
