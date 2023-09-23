const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log("product from cartReducer:", product, color);
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
  return state;
};

export default cartReducer;
