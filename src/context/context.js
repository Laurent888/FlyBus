import React, { useEffect, useState, createContext, Fragment } from "react";
import data from "../data";

const FlybusContext = createContext();

const FlybusProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [state, setState] = useState({
    articles: [],
    aircraft: [],
    allPrice: [],
    onlyPrice: [],
    homepageDescription: [],
    defense: [],
    space: [],
    totalPrice: 0,
  });

  useEffect(() => {
    setLoading(true);
    const tempArticles = [...data.articles];
    const tempAircraft = [...data.aircraft];
    const tempHomeDes = [...data.homepage];
    const tempDefense = [...data.defense];
    const tempSpace = [...data.space];

    // Define the Allprice array
    const aircraftPrice = tempAircraft.map((item) => {
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
        quantity: 0,
      };
      return itemData;
    });

    const defensePrice = tempDefense[1].products.map((item) => {
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
        type: "military",
      };
      return itemData;
    });

    const allPrice = [...aircraftPrice, ...defensePrice];
    let onlyPrice = [...allPrice];

    setState((state) => ({
      ...state,
      articles: tempArticles,
      aircraft: tempAircraft,
      homepageDescription: tempHomeDes,
      defense: tempDefense,
      space: tempSpace,
      allPrice,
      onlyPrice,
    }));
    setLoading(false);
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedArticles]);

  // Function used to make line breaks in text descriptions
  const addLineBreak = (string) =>
    string.split("<br />").map((item, i) => (
      <Fragment key={`${item}-${i}`}>
        {item}
        <br />
        <br />
      </Fragment>
    ));

  // To toggle the menu hamburger in mobile mode
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Function to calculate the total price of order
  const calculateTotalPrice = () => {
    const selectedArticlesTemp = [...selectedArticles];
    const totalPrice = selectedArticlesTemp.reduce((acc, val) => {
      return acc + parseInt(val.price);
    }, 0);
    setState((state) => ({
      ...state,
      totalPrice,
    }));
  };

  // Method to add or remove an article
  const orderClicked = (e, id) => {
    let filteredItem = state.onlyPrice.filter((item) => id === item.id)[0];

    let tempFilteredItem = { ...filteredItem };

    let selectedArticlesTemp = selectedArticles;

    let tempSelectedArticles = [...selectedArticlesTemp];

    let onlyPrice = state.onlyPrice.filter((item) => item.id !== id);

    // Conditional on the type of order button: plus or minus
    if (e.target.textContent === "+") {
      let tempAllPrice = [
        ...onlyPrice,
        { ...tempFilteredItem, quantity: tempFilteredItem.quantity + 1 },
      ];

      setSelectedArticles((state) => [...state, tempFilteredItem]);

      setState((state) => {
        return {
          ...state,
          onlyPrice: [...tempAllPrice],
        };
      });
    } else if (e.target.textContent === "-") {
      // Will find if the target article cunter is already at 0
      const foundItem = tempSelectedArticles.find((item) => id === item.id);
      // Remove one item from the state.selectedArticles if it exists otherwise do nothing so quantity dont become negative
      if (foundItem) {
        const foundIndex = tempSelectedArticles.indexOf(foundItem);
        tempSelectedArticles.splice(foundIndex, 1);

        let tempAllPrice = [
          ...onlyPrice,
          { ...tempFilteredItem, quantity: tempFilteredItem.quantity - 1 },
        ];
        setSelectedArticles(tempSelectedArticles);
        setState((state) => ({
          ...state,
          onlyPrice: [...tempAllPrice],
        }));
      }
      return;
    }
    return;
  };

  // Reset SelectedArticles and quantity
  const resetAll = () => {
    setLoading(true);

    const onlyPrice = state.onlyPrice;
    const tempOnlyPrice = [...onlyPrice];

    const resetQtyArray = tempOnlyPrice.map((item) => ({
      ...item,
      quantity: 0,
    }));

    setState((state) => ({
      ...state,
      onlyPrice: resetQtyArray,
      totalPrice: 0,
    }));
    setSelectedArticles([]);

    setLoading(false);
  };

  return (
    <FlybusContext.Provider
      value={{
        ...state,
        selectedArticles,
        loading,
        menuOpen,
        addLineBreak,
        handleMenuToggle,
        orderClicked,
        resetAll,
      }}
    >
      {props.children}
    </FlybusContext.Provider>
  );
};

export { FlybusProvider, FlybusContext };
