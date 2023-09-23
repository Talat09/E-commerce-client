const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price); //filter price
      //1st way
      let maxPrice = Math.max(...priceArr);
      console.log(" 1st way The maximum number is:", maxPrice);
      //2nd way
      // console.log("2nd way:", Math.max.apply(null, priceArr));
      //3rd way
      // let maxPrice = priceArr.reduce(
      //   (initialVal, curval) => Math.max(initialVal, curval),
      //   0
      // );
      // console.log("3rd way:", maxPrice);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice }, //for price filtering update price
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_List_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    // case "GET_SORT_VALUE":
    //   let userSortValue = document.getElementById("sort");
    //   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
    //   console.log(sort_value);
    //   return {
    //     ...state,
    //     sorting_value: sort_value,
    //   };
    // case "SORTING_PRODUCTS":
    //   let newSortData;
    //   let tempSortProduct = [...action.payload];
    //   if (state.sorting_value === "a-z") {
    //     newSortData = tempSortProduct.sort((a, b) => {
    //       return a.name.localeCompare(b.name);
    //     });
    //   }
    //   if (state.sorting_value === "highest") {
    //     const sortingProducts = (a, b) => {
    //       return b.price - a.price;
    //     };
    //     newSortData = tempSortProduct.sort(sortingProducts);
    //   }
    //   if (state.sorting_value === "lowest") {
    //     const sortingProducts = (a, b) => {
    //       return a.price - b.price;
    //     };
    //     newSortData = tempSortProduct.sort(sortingProducts);
    //   }
    //   if (state.sorting_value === "z-a") {
    //     newSortData = tempSortProduct.sort((a, b) => {
    //       return b.name.localeCompare(a.name);
    //     });
    //   }
    //   return {
    //     ...state,
    //     filter_products: newSortData,
    //   };
    //another sort method
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortProduct = [...action.payload];

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    default:
      return state;
  }
};
export default filterReducer;
