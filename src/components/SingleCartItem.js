import React from "react";
import { removeItem } from "../features/CartSlice";
import { useDispatch } from "react-redux";

const SingleCartItem = ({ name, price, index }) => {
    const dispatch = useDispatch();

    return (
        <div className="cartitemholder">
            <div className="cartitemname">{name}</div>
            <div className="price">${price}</div>
            <button
                onClick={() => {
                    dispatch(removeItem(index));
                    console.log(index);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default SingleCartItem;
