/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";

import reducer from "../reducer/filterReducer";
const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};
const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  //to set the List view
  const setListView = () => {
    return dispatch({ type: "SET_List_VIEW" });
  };
  //sorting function
  // const sorting = () => {
  //   dispatch({ type: "GET_SORT_VALUE" });
  // };
  //sorting function another method
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  //filter sorting
  // useEffect(() => {
  //   dispatch({ type: "SORTING_PRODUCTS", payload: products });
  // }, [state.sorting_value]);
  //filter sorting 2
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  //update filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  //clear the filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  //
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterContext, FilterContextProvider, useFilterContext };
