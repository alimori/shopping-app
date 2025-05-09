import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, removeFromCart, updateQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>${item.price} ×</p>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                    className="w-16 border px-2 py-1 rounded mt-1"
                  />
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-xl mt-4">Total: ${total}</div>
          <button
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            onClick={() => alert("Payment processed via Stripe/PayPal (mock)")}
          >
            Pay with Stripe / PayPal
          </button>
        </div>
      )}
    </div>
  );
}