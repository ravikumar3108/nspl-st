import React from 'react'
import { useCart } from 'react-use-cart'

function Cart() {

    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart()


    return (
        <div>
            <h1>Cart {totalUniqueItems}</h1>

            {items.map((item) => {
                return (
                    <>
                        <h1>{item.title}</h1>
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </>
                )
            })}

        </div >
    )
}

export default Cart
