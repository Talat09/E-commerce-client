const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log("product from cartReducer:", product, color);
    //handling existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let newCartProduct;
      newCartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, newCartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload //jei id ta match hoise oita chara baki gula return korbe
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }
  //to clear cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  //to set the increment and decrement product
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let increAmount = curItem.amount + 1;
        if (increAmount >= curItem.max) {
          increAmount = curItem.max;
        }
        return {
          ...curItem,
          amount: increAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemValue = state.cart.reduce((initialVal, curItem) => {
      let { amount } = curItem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_item: updatedItemValue,
    };
  }
  return state;
};

export default cartReducer;
