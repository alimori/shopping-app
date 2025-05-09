import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="p-4 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;