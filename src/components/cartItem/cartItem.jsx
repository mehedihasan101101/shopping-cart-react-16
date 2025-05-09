import { useState } from "react";


export default function CartItem({cartItem}) {
    const [quantity, setQuantity] = useState(1);
    function cartOperation(event) {

        const value = event.target.value;
        setQuantity(value);

    }
  
    function priceCal() {
        const basePrice = cartItem.price;
        const price = quantity * basePrice;
        return price.toFixed(2);

    }

    return (
        <>
            <div className="flex items-center gap-5">
                <img className="w-[70px]" src={cartItem.image} alt="" />
                <span className=""> {cartItem.name} </span>
                <label className="input w-fit p" >
                    Qty:
                    <input onChange={cartOperation} min={1} max={10} value={quantity} type="number" className="w-[35px]" />

                </label>
                <span className=""> = </span>
                <span className="">{priceCal()}</span>
            </div>


        </>
    )
}

