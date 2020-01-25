import React, { useContext, Fragment } from "react";
import "./orderPage.scss";
import Hero from "../../components/Hero/Hero";
import { FlybusContext } from "../../context/context";
import Corporate from "../../img/corporate.png";

const OrderPage = () => {
  const { aircraft, defense, loading, allPrice } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }

  const renderedCatalogue = allPrice.map(item => (
    <Fragment key={item.id}>
      <li className="catalogue-item">
        <div className="catalogue-name">{item.name}</div>{" "}
        <div className="catalogue-price">{item.price} millions &euro;</div>{" "}
        <div className="catalogue-type">{item.type}</div>
      </li>
    </Fragment>
  ));

  return (
    <div>
      <Hero src={Corporate} title="Order Page" />
      <div className="catalogue row">
        <ul className="catalogue-list">
          <li className="catalogue-item label">
            <div>Product Name</div>
            <div>Price</div>
            <div>Type</div>
          </li>
          {renderedCatalogue}
        </ul>
      </div>
    </div>
  );
};

export default OrderPage;
