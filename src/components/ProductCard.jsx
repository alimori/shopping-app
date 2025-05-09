import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
      >
        Add to Cart
      </button>
    </div>
  );
}