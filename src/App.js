import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./layout/footer/footer";
import { Route, Switch } from "react-router-dom";
import Homepage from "./layout/homepage/homepage";
import Commercial from "./layout/commercial/commercial";
import DefensePage from "./layout/defensePage/defensePage";
import SpacePage from "./layout/spacePage/spacePage";
import SingleAircraft from "./layout/singleAircraft/singleAircraft";
import SingleDefense from "./layout/singleDefense/singleDefense";
import FactoryTour from "./layout/factoryTour/factoryTour";
import MarketOutlook from "./layout/marletOutlook/marketOutlook";
import ScrollToTop from "./components/scrollToTop";
import OrderPage from "./layout/orderPage/orderPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/commercial" component={Commercial} />
        <Route exact path="/defense" component={DefensePage} />
        <Route exact path="/space" component={SpacePage} />
        <Route exact path="/factory-tour" component={FactoryTour} />
        <Route exact path="/market-outlook" component={MarketOutlook} />
        <Route exact path="/commercial/:aircraft" component={SingleAircraft} />
        <Route exact path="/defense/:defense" component={SingleDefense} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
