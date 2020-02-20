import React, { useContext } from "react";
import FullPageHero from "../../components/FullPageHero/FullPageHero";
import { FlybusContext } from "../../context/context";
import "./factoryTour.scss";

const FactoryTour = () => {
  const { articles, loading } = useContext(FlybusContext);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="factoryTour">
      <FullPageHero
        src={articles[0].image[1]}
        title={articles[0].titleSub}
        content={articles[0].content}
        button="Watch our youtube video"
        url={articles[0].urlOut}
      />
    </div>
  );
};

export default FactoryTour;
