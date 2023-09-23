import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();
const getLocalStorageData = () => {
  let localCartData = localStorage.getItem("JuhiCart");
  if (localCartData === null || localCartData === "") {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};
const initialState = {
  //   cart: [],
  cart: getLocalStorageData(),
  total_item: "",
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //add data into the local storage
  //get and set
  useEffect(() => {
    localStorage.setItem("JuhiCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
