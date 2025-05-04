function getStoredCart() {
    const getStoredString = localStorage.getItem("cart");
    if (getStoredString) {
        return JSON.parse(getStoredString);
    }
    return [];
}

function setCartLs(id) {
    let addItemToCart = getStoredCart();
    addItemToCart.push(id);

    localStorage.setItem("cart", JSON.stringify(addItemToCart));
}

export{setCartLs,getStoredCart}