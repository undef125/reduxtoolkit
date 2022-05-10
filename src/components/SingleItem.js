import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addItems } from "../features/CartSlice";

const SingleItem = ({ name, imgUrl, price }) => {
    const dispatch = useDispatch();
    const addIte = () => {
      dispatch(addItems({name,imgUrl,price}));
    };
    return (
        <div className="itemHolder">
            <div className="imageHolder">
                <img src={imgUrl} alt="adsfasdf" />
            </div>
            <div className="name">{name}</div>
            <div className="price">${price}</div>
            <button onClick={() => addIte()}>Add to cart</button>
        </div>
    );
};

export default SingleItem;
