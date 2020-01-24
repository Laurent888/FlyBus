import React, { Component, createContext, Fragment } from "react";
import data from "../data";

const FlybusContext = createContext();

class FlybusProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      defense: [],
      loading: true
    };
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    const tempArticles = data.articles;
    const tempDefense = data.defense;
    this.setState({
      articles: tempArticles,
      defense: tempDefense,
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

  render() {
    return (
      <FlybusContext.Provider
        value={{ ...this.state, addLineBreak: this.addLineBreak }}
      >
        {this.props.children}
      </FlybusContext.Provider>
    );
  }
}

export { FlybusProvider, FlybusContext };
