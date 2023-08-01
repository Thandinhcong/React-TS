import React from "react";
import { decrease, increase } from "../../slices/cart";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";


const Cart = () => {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: RootState) => state.carts);

    return (
        <div>
            {items?.map((item) => (
                <div key={item.id}>
                    {item?.name} - {item?.quantity} - {item?.price * item?.quantity}
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(increase(item.id))}
                    >
                        increase
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => dispatch(decrease(item.id))}
                    >
                        decrease
                    </button>
                </div>
            ))
            }
            Total: {
                items.reduce(function (sum: any, item: any) {
                    return sum + item.price * item.quantity;
                }, 0)
            }
        </div >
    );
};

export default Cart;