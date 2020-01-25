import React, { Component, createContext, Fragment } from "react";
import data from "../data";

const FlybusContext = createContext();

class FlybusProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      aircraft: [],
      homepageDescription: [],
      defense: [],
      space: [],
      loading: true,
      menuOpen: false
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    const tempArticles = [...data.articles];
    const tempAircraft = [...data.aircraft];
    const tempHomeDes = [...data.homepage];
    const tempDefense = [...data.defense];
    const tempSpace = [...data.space];

    const aircraftPrice = tempAircraft.map(item => {
      const id = item.id;
      const name = item.name;
      const price = item.singlePage.specification.price;
      const img = item.image;
      const itemData = {
        id,
        name,
        img,
        price,
        type: "civilian"
      };
      return itemData;
    });

    const defensePrice = tempDefense[1].products.map(item => {
      const id = item.id;
      const name = item.name;
      const price = item.singlePage.specification.price;
      const img = item.image;
      const itemData = {
        id,
        name,
        img,
        price,
        type: "military"
      };
      return itemData;
    });

    const allPrice = [...aircraftPrice, ...defensePrice, { totalPrice: 0 }];

    this.setState({
      articles: tempArticles,
      aircraft: tempAircraft,
      homepageDescription: tempHomeDes,
      defense: tempDefense,
      space: tempSpace,
      allPrice,
      loading: false
    });
  };

  addLineBreak = string =>
    string.split("<br />").map((item, i) => (
      <Fragment key={`${item}-${i}`}>
        {item}
        <br />
        <br />
      </Fragment>
    ));

  handleMenuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <FlybusContext.Provider
        value={{
          ...this.state,
          addLineBreak: this.addLineBreak,
          handleMenuToggle: this.handleMenuToggle
        }}
      >
        {this.props.children}
      </FlybusContext.Provider>
    );
  }
}

export { FlybusProvider, FlybusContext };
