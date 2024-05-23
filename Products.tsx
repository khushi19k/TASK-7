import React from "react"; 
import styled from "styled-components";
import Product from "./ProductPreview";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const popularProducts = [
  { id: 1, name: "Cooler", price: "Rs. 100", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/air-cooler/g/5/m/-original-imagnhm7yahtsdah.jpeg?q=90&crop=false" },
  { id: 2, name: "Mattress", price: "Rs. 150", img: "https://www.jiomart.com/images/product/original/hdma1q04ep15743/simplywud-classic-foam-mattress-queen-product-images-ohdma1q04ep15743-p600118817-1-202304031708.jpg?im=Resize=(420,420)" },
  { id: 3, name: "Study Desk", price: "Rs. 200", img: "https://www.a10shop.in/cdn/shop/products/1_DennisStudyTable_White.png?v=1674757099" },
];

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
