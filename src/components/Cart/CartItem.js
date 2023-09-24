import React from "react";
import FormatPrice from "../../Helpers/FormatPrice";
import CartAmountToggle from "../CartAmountToggle/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../context/cartContext";
const CartItem = ({ item }) => {
  const { id, name, image, color, price, amount } = item;
  // console.log(item);
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      {/* Quantity*/}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrement(id)}
        setIncrease={() => setIncrement(id)}
      ></CartAmountToggle>
      {/* subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/* remove item */}
      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => removeItem(id)}
        ></FaTrash>
      </div>
    </div>
  );
};

export default CartItem;
