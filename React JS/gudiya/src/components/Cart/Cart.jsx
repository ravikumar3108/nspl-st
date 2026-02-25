import { useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <>
            <h1>Cart ({totalUniqueItems})</h1>

            <ul>
                {items.map((item) => (
                    <div>
                        <h1>{item.name}</h1>
                        <button
                            onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}
                        >
                            -
                        </button>
                        <button
                            onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}
                        >
                            +
                        </button>
                        <button onClick={() => removeItem(item.id)}>&times;</button>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default Cart