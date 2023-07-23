import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state: any) => state.cart);

    return (
        <div>
            {items?.map((item: any) => (
                <div key={item.id}>
                    {item?.name} - {item?.quantity} - {item?.price * item?.quantity}
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch({ type: "cart/increase", payload: item.id })}
                    >
                        increase
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => dispatch({ type: "cart/decrease", payload: item.id })}
                    >
                        decrease
                    </button>
                </div>
            ))}
            Total:{items.reduce(function (sum: any, item: any) {
                return sum + item.price * item.quantity;
            }, 0)}
        </div>
    );
};

export default Cart;