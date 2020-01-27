import React, { useContext, Fragment } from "react";
import "./orderPage.scss";
import Hero from "../../components/Hero/Hero";
import { FlybusContext } from "../../context/context";
import Corporate from "../../img/corporate.png";
import OrderArticleButton from "../../components/OrderArticleButton/OrderArticleButton";
import ButtonLarge from "../../components/Buttons/ButtonLarge/ButtonLarge";

const OrderPage = () => {
  const {
    loading,
    allPrice,
    onlyPrice,
    orderClicked,
    totalPrice,
    resetAll
  } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }

  const renderedCatalogue = allPrice.map(item => {
    let quantity = onlyPrice.filter(qty => {
      return item.id === qty.id;
    })[0].quantity;
    return (
      <Fragment key={item.id}>
        <li id={item.id} className="catalogue-item">
          <div className="catalogue-item__name">{item.name}</div>{" "}
          <div className="catalogue-item__image">
            <img
              src={item.img}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div className="catalogue-item__price">
            {item.price} millions &euro;
          </div>{" "}
          <div
            className={`catalogue-item__type ${
              item.type === "military " ? "military" : null
            }`}
          >
            {item.type}
          </div>
          <OrderArticleButton
            id={item.id}
            orderClicked={orderClicked}
            quantity={quantity}
          />
        </li>
      </Fragment>
    );
  });

  return (
    <div>
      <Hero src={Corporate} title="Order Page" />
      <div className="catalogue row">
        <ul className="catalogue-list">
          <li className="catalogue-item label">
            <div>Product Name</div>
            <div>Price</div>
            <div>Type</div>
            <div>Order</div>
          </li>
          {renderedCatalogue}
        </ul>
        <div className="total-price">
          <h3 className="m-heading">
            Total price:{" "}
            <span className="total-price__value">{totalPrice}</span>
            {totalPrice > 0 ? <span> millions &euro;</span> : null}
          </h3>
          <div className="buttons">
            <ButtonLarge btnType="danger" label="Send Order" />
            <ButtonLarge
              btnType="default"
              label="Clear all"
              clicked={resetAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
