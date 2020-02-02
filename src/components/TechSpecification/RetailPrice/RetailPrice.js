import React from "react";
import { Link } from "react-router-dom";
import "./RetailPrice.scss";
import ButtonLarge from "../../Buttons/ButtonLarge/ButtonLarge";

const RetailPrice = props => {
  const spec = props.spec;
  return (
    <div className="retail-price">
      <h3 className="m-heading">Retail Price</h3>
      <div className="price my-3">
        <h5>Price</h5>
        <p>{spec.price} millions &euro;</p>
      </div>
      <Link to="/order">
        <ButtonLarge label="To order page" btnType="default" />
      </Link>
    </div>
  );
};

export default RetailPrice;
