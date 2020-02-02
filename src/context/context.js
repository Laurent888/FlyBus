import React, { Component, createContext, Fragment } from "react";
import data from "../data";

const FlybusContext = createContext();

class FlybusProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      aircraft: [],
      allPrice: [],
      onlyPrice: [],
      homepageDescription: [],
      defense: [],
      space: [],
      loading: true,
      selectedArticles: [],
      totalPrice: 0,
      menuOpen: false
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    console.log(this.state.loading);
    const tempArticles = [...data.articles];
    const tempAircraft = [...data.aircraft];
    const tempHomeDes = [...data.homepage];
    const tempDefense = [...data.defense];
    const tempSpace = [...data.space];
    console.log(tempArticles);

    // Define the Allprice array
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
        type: "civilian",
        quantity: 0
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
        quantity: 0,
        type: "military"
      };
      return itemData;
    });

    const allPrice = [...aircraftPrice, ...defensePrice];
    let onlyPrice = [...allPrice];

    this.setState({
      articles: tempArticles,
      aircraft: tempAircraft,
      homepageDescription: tempHomeDes,
      defense: tempDefense,
      space: tempSpace,
      allPrice,
      onlyPrice,
      loading: false
    });
  };

  // Function used to make line breaks in text descriptions
  addLineBreak = string =>
    string.split("<br />").map((item, i) => (
      <Fragment key={`${item}-${i}`}>
        {item}
        <br />
        <br />
      </Fragment>
    ));

  // To toggle the menu hamburger in mobile mode
  handleMenuToggle = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  // Function to calculate the total price of order
  calculateTotalPrice = () => {
    const selectedArticles = [...this.state.selectedArticles];
    const totalPrice = selectedArticles.reduce((acc, val) => {
      return acc + parseInt(val.price);
    }, 0);
    this.setState({
      totalPrice
    });
  };

  // Method to add or remove an article
  orderClicked = (e, id) => {
    let filteredItem = this.state.onlyPrice.filter(item => id === item.id)[0];
    let tempFilteredItem = { ...filteredItem };
    let selectedArticles = this.state.selectedArticles;
    let tempSelectedArticles = [...selectedArticles];
    let onlyPrice = this.state.onlyPrice.filter(item => item.id !== id);

    // Conditional on the type of order button: plus or minus
    if (e.target.textContent === "+") {
      let tempAllPrice = [
        ...onlyPrice,
        { ...tempFilteredItem, quantity: tempFilteredItem.quantity + 1 }
      ];
      this.setState(
        state => {
          return {
            onlyPrice: [...tempAllPrice],
            selectedArticles: [...state.selectedArticles, tempFilteredItem]
          };
        },
        () => this.calculateTotalPrice()
      );
    } else if (e.target.textContent === "-") {
      // Will find if the target article cunter is already at 0
      const foundItem = tempSelectedArticles.find(item => id === item.id);
      // Remove one item from the state.selectedArticles if it exists otherwise do nothing so quantity dont become negative
      if (foundItem) {
        const foundIndex = tempSelectedArticles.indexOf(foundItem);
        tempSelectedArticles.splice(foundIndex, 1);

        let tempAllPrice = [
          ...onlyPrice,
          { ...tempFilteredItem, quantity: tempFilteredItem.quantity - 1 }
        ];
        this.setState(
          {
            onlyPrice: [...tempAllPrice],
            selectedArticles: tempSelectedArticles
          },
          () => this.calculateTotalPrice()
        );
      }
      return;
    }
    return;
  };

  // Reset SelectedArticles and quantity
  resetAll = () => {
    this.setState({
      loading: true
    });

    const onlyPrice = this.state.onlyPrice;
    const tempOnlyPrice = [...onlyPrice];

    const resetQtyArray = tempOnlyPrice.map(item => ({
      ...item,
      quantity: 0
    }));

    this.setState({
      onlyPrice: resetQtyArray,
      selectedArticles: [],
      totalPrice: 0,
      loading: false
    });
  };

  render() {
    return (
      <FlybusContext.Provider
        value={{
          ...this.state,
          addLineBreak: this.addLineBreak,
          handleMenuToggle: this.handleMenuToggle,
          orderClicked: this.orderClicked,
          resetAll: this.resetAll
        }}
      >
        {this.props.children}
      </FlybusContext.Provider>
    );
  }
}

export { FlybusProvider, FlybusContext };
