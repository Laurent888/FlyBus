import React, { useContext } from "react";
import "./Modal.scss";
import { FlybusContext } from "../../context/context";
import ButtonLarge from "../Buttons/ButtonLarge/ButtonLarge";

const Modal = props => {
  const { totalPrice, onlyPrice } = useContext(FlybusContext);
  const allArticlesOrder = onlyPrice.filter(item => item.quantity >= 1);
  return (
    <div className="backdrop">
      <div>
        <div className="modal">
          <div className="modal__content">
            <h3 className="m-heading">Your Order</h3>
            <ul className="recap-list my-2">
              {allArticlesOrder.map(item => {
                return (
                  <li className="recap-list__item">
                    <p>{item.name}</p>
                    <p></p>
                    <p>x{item.quantity}</p>
                  </li>
                );
              })}
            </ul>
            <h3 className="s-heading my-2">
              Total Order: {totalPrice}{" "}
              {totalPrice !== 0 && <span>millions &euro;</span>}
            </h3>
            <div className="modal__content__buttons my-1">
              <ButtonLarge
                btnType="success"
                label="Confirm Order"
                clicked={props.clicked}
              />
              <ButtonLarge
                btnType="default"
                label="close"
                clicked={props.close}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
