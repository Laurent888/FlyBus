import React from "react";
import "./OrderArticleButton.scss";

const OrderArticleButton = props => {
  const id = props.id;
  return (
    <div className="orderArticleBtn">
      <button onClick={e => props.orderClicked(e, id)}>&#45;</button>
      <p className="orderArticleBtn__num">{props.quantity}</p>
      <button onClick={e => props.orderClicked(e, id)}>&#43;</button>
    </div>
  );
};

export default OrderArticleButton;
