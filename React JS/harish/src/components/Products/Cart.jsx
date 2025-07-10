import { useCart } from "react-use-cart";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
              }
            >
              -
            </button>
            <button
              onClick={() =>
                updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
              }
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
