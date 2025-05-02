import { useEffect, useState } from "react";
import ProductCart from "../productCard/productCart";


const Productarchive = () => {


    const [keyBoards, setKeyBoards] = useState([])

    useEffect(() => {
        fetch('/shopping-cart-react-16/products.json')
            .then(res => res.json())
            .then(data => setKeyBoards(data))
    }, [])
    console.log(keyBoards);
    return (
        <div className="container m-auto  grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-10 p-5">
         {keyBoards.map(keyboard=>(<ProductCart key={keyboard.id} eachProduct ={keyboard}></ProductCart>))}
        </div>
    );
};

export default Productarchive;