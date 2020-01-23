import img1 from "./img/a220-thumb.jpg";
import img2 from "./img/a320-thumb.jpg";
import img3 from "./img/a330-thumb.jpg";
import img4 from "./img/a350-thumb.jpg";
import img5 from "./img/a380-thumb.png";
import factory from "./img/factory.jpg";
import hero2 from "./img/hero2.png";

export default {
  aircraft: [
    {
      id: 1,
      name: "F220",
      image: img1
    },
    {
      id: 2,
      name: "F320",
      image: img2
    },
    {
      id: 3,
      name: "F330",
      image: img3
    },
    {
      id: 4,
      name: "F350",
      image: img4
    },
    {
      id: 5,
      name: "F380",
      image: img5
    }
  ],
  homepage: [
    {
      description1:
        "Flybus is an international reference in the aerospace sector. We design, manufacture and deliver industry-leading commercial aircraft, helicopters, military transports, satellites and launch vehicles, as well as providing data services, navigation, secure communications, urban mobility and other solutions for customers on a global scale. With a forward-looking strategy based on cutting-edge technologies, digital and scientific excellence, we aim for a better-connected, safer and more prosperous world."
    }
  ],
  articles: [
    {
      id: "article1",
      image: factory,
      title: "Inside the Flybus factory"
    },
    {
      id: "article2",
      image: hero2,
      title: "Long term market outlook"
    }
  ],
  footer: {
    utilities: ["News", "Investors", "Employee", "Merchandise"],
    categories: ["Commercial", "Defense", "Space", "Career", "Our company"],
    popular: ["Orders & Deliveries", "Highlights", "Tours", "Licensing"]
  }
};
