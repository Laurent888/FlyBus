import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { FlybusContext } from "./context/context";

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
import SingleSpace from "./layout/singleSpace/singleSpace";

function App(props) {
  const { setDarkTheme } = useContext(FlybusContext);

  if (props.location.pathname.includes("/space")) {
    setDarkTheme(true);
  } else {
    setDarkTheme(false);
  }

  return (
    <div>
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
        <Route exact path="/space/:space" component={SingleSpace} />
        <Route exact path="/order" component={OrderPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
