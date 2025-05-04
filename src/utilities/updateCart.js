function updateCart(id, allProducts) {
    let matched = []
    id.map(n => {
        let newArrr = allProducts.find(x => x.id === n);
        if (newArrr) {
            matched.push(newArrr);
        }
    })
    return matched
}

export {updateCart};