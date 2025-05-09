import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        🛍️ React Shop
      </Link>
      <Link to="/checkout" className="relative">
        <ShoppingCart className="w-6 h-6" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </Link>
    </header>
  );
}
