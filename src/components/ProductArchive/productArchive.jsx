import { useEffect, useState } from "react";
import ProductCard from "../productCard/productCard";


const Productarchive = ({ addToCart, getAllProduct,cartItems}) => {


    const [keyBoards, setKeyBoards] = useState([]);


    useEffect(() => {
        fetch('/shopping-cart-react-16/products.json')
            .then(res => res.json())
            .then(data => setKeyBoards(data))
    }, [])

    getAllProduct(keyBoards);


    return (
        <div className="container m-auto  grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-10 p-5">
            {keyBoards.map(keyboard => {
               const isAdded = cartItems.some(x=> keyboard.id == x.id) 
    
                return(
                    <ProductCard isAdded={isAdded} addToCart={addToCart} key={keyboard.id} eachProduct={keyboard}></ProductCard>
                )
            })}
        </div>
    );
};

export default Productarchive;