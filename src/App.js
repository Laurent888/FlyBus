import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./layout/footer/footer";
import { Route, Switch } from "react-router-dom";
import Homepage from "./layout/homepage/homepage";
import DefensePage from "./layout/defensePage/defensePage";
import SingleAircraft from "./layout/singleAircraft/singleAircraft";
import FactoryTour from "./layout/factoryTour/factoryTour";
import MarketOutlook from "./layout/marletOutlook/marketOutlook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/defense" component={DefensePage} />
        <Route exact path="/factory-tour" component={FactoryTour} />
        <Route exact path="/market-outlook" component={MarketOutlook} />
        <Route exact path="/:aircraft" component={SingleAircraft} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
