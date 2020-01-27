import React, { useContext, useState, Fragment } from "react";
import "./orderPage.scss";
import Hero from "../../components/Hero/Hero";
import { FlybusContext } from "../../context/context";
import Corporate from "../../img/corporate.png";
import Modal from "../../components/Modal/Modal";
import OrderArticleButton from "../../components/OrderArticleButton/OrderArticleButton";
import ButtonLarge from "../../components/Buttons/ButtonLarge/ButtonLarge";

const windowThankYou = () =>
  alert(
    "Flybus thanks you for your trust and wish you an extraordinary experience with our products"
  );

const OrderPage = () => {
  const {
    loading,
    allPrice,
    onlyPrice,
    orderClicked,
    totalPrice,
    resetAll
  } = useContext(FlybusContext);

  const [modalOpen, setModalOpen] = useState(false);

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
              item.type === "military" ? "military" : null
            }`}
          >
            {item.type}
            {item.type === "military" && (
              <i
                className="fas fa-exclamation-triangle"
                style={{ color: "#9a0036", marginLeft: ".5rem" }}
              >
                <p className="authaurization">
                  Please refer to your national authorities before ordering
                  military equipment
                </p>
              </i>
            )}
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
    <div className="orderPage">
      {modalOpen ? (
        <Modal
          clicked={() => {
            setModalOpen(!modalOpen);
            windowThankYou();
          }}
          close={() => setModalOpen(!modalOpen)}
        />
      ) : null}
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
            {totalPrice === 0 ? null : (
              <ButtonLarge
                btnType="danger"
                label="Send Order"
                clicked={() => setModalOpen(true)}
              />
            )}

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
