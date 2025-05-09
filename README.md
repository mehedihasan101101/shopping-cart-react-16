# Shopping Cart

This is a simple **React** project designed to practice working with **local storage** and React state management. The application allows users to add products to a shopping cart, with the cart data being stored and retrieved from the browser's local storage.

---

## **Features**

- **Product Listing**: Displays a list of products dynamically.
- **Add to Cart**: Users can add items to the shopping cart.
- **Persistent Cart**: Cart data is saved in local storage and reloaded on page refresh.
- **React State Management**: Uses `useState` and `useEffect` hooks for managing state and side effects.

---

## **Technologies Used**

- **React**: For building the user interface.
- **Local Storage**: For persisting cart data.
- **Tailwind Css**: For styling the application.

---

## **How It Works**

1. **Add to Cart**: When a user clicks "Add to Cart," the product ID is saved to local storage using the `setCartLs` utility function.
2. **Retrieve Cart**: On page load, the cart data is retrieved from local storage using the `getStoredCart` function.
3. **Update Cart**: The `updateCart` function ensures the cart items are synced with the product list.

---