//create a context
//provider
//consumer => useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect } from "react";
const API = "https://api.pujakaitem.com/api/products";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(products);
  };
  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ name: "Talat" }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
