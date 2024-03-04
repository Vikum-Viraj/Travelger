import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

 const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])

  const addToCart = (item) => {
    const itemInCart = cartItems.find((items) => items.id == item.id)

    if(itemInCart){
      setCartItems(
        cartItems.map((cartItem) => cartItem.id === item.id
        ? {...cartItems , quantity :quantity++}
        : cartItem
        )
      )
    }else{
      setCartItems([...cartItems,{...item,quantity:1}])
    }

  }


  const removeFromCart = (item) => {
    const itemInCart = cartItems.find((items) => items.id == item.id)

    if(itemInCart.quantity == 1){
      setCartItems(cartItems.filter(items => items.id !== item.id))
    }else{
      setCartItems(cartItems.map(items => items.id === item.id 
        ? {...cartItems,quantity:quantity--}
        : cartItems))
    }

  }

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total,item) => total + item.price * item.quantity,0)
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);


  return(
    <CartContext.Provider
    value={{
      addToCart,
      removeFromCart,
      clearCart,
      cartItems,
      getCartTotal
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider