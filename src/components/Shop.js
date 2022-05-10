import React from "react";
import SingleItem from "./SingleItem";

const Shop = () => {
    const items = [
        {
            name: "Chair",
            image: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s",
            price: "10",
        },
        {
            name: "Bed",
            image: "https://cdn.shopify.com/s/files/1/0225/2528/0331/products/sydney_bed_natural_king-queen_1_2000x.jpg?v=1587146049",
            price: "100",
        },
        {
            name: "Table",
            image: "https://rnb.scene7.com/is/image/roomandboard/698884_wood_W?scl=1",
            price: "20",
        },
    ];

    return (
        <div className="shopHolder">
            {items.map((item) => {
                return (
                    <>
                        <SingleItem
                            name={item.name}
                            imgUrl={item.image}
                            price={item.price}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default Shop;
