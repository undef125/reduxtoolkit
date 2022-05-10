import React from "react";
import { useSelector } from "react-redux";
import SingleCartItem from "./SingleCartItem";

const Cart = () => {
  let index = -1;
    const itemsSelected = useSelector((state) => state.items);
    let totalPrice = 0;
    // setCartItems(itemsSelected.items);
    return (
        <div className="cartContainer">
          <div className="totalPrice">Total Price: ${itemsSelected.items?.forEach(element => {
              totalPrice += parseInt(element.price);
          })} {totalPrice}</div>
            {itemsSelected.items?.map((item) => {
              {index += 1}
                return (
                    <>
                        <SingleCartItem name={item.name} price={item.price} index={index}/>
                    </>
                );
            })}
        </div>
    );
};

export default Cart;
