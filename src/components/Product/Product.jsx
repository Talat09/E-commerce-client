/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";

const Product = ({ product }) => {
  const { name, price, id, category, image } = product;
  // console.log(name);
  return (
    <NavLink to={`/single-product/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
