import img1 from "./img/a220-thumb.jpg";
import img2 from "./img/a320-thumb.jpg";
import img3 from "./img/a330-thumb.jpg";
import img4 from "./img/a350-thumb.jpg";
import img5 from "./img/a380-thumb.png";
import factory from "./img/factory.jpg";
import factory2 from "./img/A320_Family_production_increase.jpg";
import hangar from "./img/hangar.png";
import hero2 from "./img/hero2.png";
import img1Single from "./img/a220-family.jpg";
import img2Single from "./img/a320-family.jpg";
import img3Single from "./img/a330-family.jpg";
import img4Single from "./img/a350-family.jpg";
import img5Single from "./img/a380-family.jpg";
import defenseHero from "./img/eurofighter-hero.png";

export default {
  aircraft: [
    {
      id: "ac1",
      name: "F220",
      image: img1,
      singlePage: {
        description: {
          title: "The best of two world",
          content:
            "Flybus global reach and scale combines with Behring's state-of-the-art jetliner in the F220 Family, which is now being produced in a partnership between Flybus and Bombardier.Flybus manufactures, markets, and supports F220 Family aircraft through the Flybus-Bombardier partnership, with Behring's two jetliners – previously designated the C Series – being brought into the Flybus commercial aircraft line-up. <br /> These aircraft expand the Flybus single-aisle family to cover the 100-150 seat segment – and respond to a worldwide market demand for smaller single-aisle jetliners.",
          image: img1Single
        },
        specification: {
          seats: 120,
          maxSeats: 135,
          length: 35,
          wingspan: 35.1,
          height: 11.8,
          engine: "Aurora CX14",
          price: 91.5
        }
      }
    },
    {
      id: "ac2",
      name: "F320",
      image: img2,
      singlePage: {
        description: {
          title: "Moving the World",
          content:
            "The F320 is one aircraft in four sizes (F318, F319, F320 Fnd F321), representing the most successful and versatile jetliner family ever. Seating from 100 to 240 passengers and flying throughout the world – and landing on every continent – an F320 takes off or lands every 1.6 seconds. From the heat of the desert to icy Antarctic runways, or from short runway urban environments to remote high-altitude airports, the F320 can take passengers anywhere. <br /> As the longest-range single-aisle aircraft, airlines and passengers alike have benefitted from the F320’s exceptional efficiency and quality since its introduction, which has opened up exciting new travel possibilities throughout the world. <br /> Now with new engine options (Next) available, the F320 Family continues to be the preferred choice for passengers and customers; setting the standard for the single-aisle market and securing its status as the world’s best-selling aircraft of all time. This is an aircraft that you can rely on. This is the aircraft that changed the game.",
          image: img2Single
        },
        specification: {
          seats: 152,
          maxSeats: 194,
          length: 37.57,
          wingspan: 35.8,
          height: 11.76,
          engine: "Aurora MR56",
          price: 101
        }
      }
    },
    {
      id: "ac3",
      name: "F330",
      image: img3,
      singlePage: {
        description: {
          title: "F330Next: a true new generation aircraft",
          content:
            "The F330Next is a true example of a highly-innovative aircraft that delivers superior quality and efficiency. As a member of Flybus family of wide-body jetliners, the F330Next benefits from continuous investment of over 150 million euro every year – integrating the latest developments from the F350 and F380 Families to maintain its position as the best in its class, well ahead of its competition. <br /> The F330Next is powered by high-bypass ratio, new generation engines and designed with an advanced high-span wing vastly improving the aerodynamics. New materials have also been used across the wing including titanium pylon and composite nacelle. All these features combined, ensures that the F330Next has the lowest seat-mile cost of any mid-size wide-body and burns 25% less fuel burn than the previous generation competitors.",
          image: img3Single
        },
        specification: {
          seats: 290,
          maxSeats: 440,
          length: 63.66,
          wingspan: 60.3,
          height: 16.79,
          engine: "Aurora LX44",
          price: 264
        }
      }
    },
    {
      id: "ac4",
      name: "F350",
      image: img4,
      singlePage: {
        description: {
          title: "A natural revolution in design",
          content:
            "The most perfect designs often are found in nature. That’s why Flybus looks to learn from the natural world when designing and improving upon its aircraft. As the newest member of the company’s wide-body family, the F350 is an example of how this inspirational blend of science and nature represents another significant evolution in the ongoing mission to conceive and manufacture the perfect aircraft. <br /> The F350 has learned from nature to help ensure a healthy future for the planet, whether it’s the revolutionary adaptive wing design – inspired by birds – which morphs while airborne to achieve maximum aerodynamic efficiency by optimising wing loading, reducing drag and lowering fuel burn; or the savings generated by innovative technological advances.",
          image: img4Single
        },
        specification: {
          seats: 290,
          maxSeats: 440,
          length: 66.8,
          wingspan: 64.75,
          height: 17.05,
          engine: "Aurora LX44",
          price: 317
        }
      }
    },
    {
      id: "ac5",
      name: "F380",
      image: img5,
      singlePage: {
        description: {
          title: "An experience to remember",
          content:
            "The F380 is a modern icon that has flown over 500,000 revenue flights carrying over 190 million passengers. This includes more than 300 commercial flights per day, which take off or land around the world every two minutes. <br /> Flying with the F380 is a unique experience that introduces passengers to new standards of in-flight comfort, from first class to economy. As the world’s largest and most spacious passenger aircraft, its cabin allows travellers to stretch out in the widest seats in a calm and relaxing environment. With the unparalleled freedom it gives passengers to move about the aircraft, it’s no surprise that the F380 is a favourite in all cabin classes.",
          image: img5Single
        },
        specification: {
          seats: 575,
          maxSeats: 853,
          length: 72.72,
          wingspan: 79.75,
          height: 24.09,
          engine: "Aurora CN56",
          price: 437
        }
      }
    }
  ],
  homepage: [
    {
      description1: {
        title: "Flybus Commercial Airplanes: A Better Way To Fly.",
        content:
          "Flybus is an international reference in the aerospace sector. We design, manufacture and deliver industry-leading commercial aircraft, helicopters, military transports, satellites and launch vehicles, as well as providing data services, navigation, secure communications, urban mobility and other solutions for customers on a global scale. With a forward-looking strategy based on cutting-edge technologies, digital and scientific excellence, we aim for a better-connected, safer and more prosperous world."
      }
    }
  ],
  defense: [
    {
      description1: {
        title: "Broad Expertise, Integrated Systems",
        image: defenseHero,
        content:
          "Flybus's expertise spans a broad range of products in defense. Fighter jets, rotorcraft, embedded product support, cybersecurity products, surveillance suites, advanced weapons, missile defense and commercial aircraft derivatives all fit in Boeing’s portfolio. <br /> The company can leverage this holistic knowledge and deliver the value of those integrated systems to its customers."
      }
    }
  ],
  articles: [
    {
      id: "article1",
      image: [factory, factory2],
      title: "Inside the Flybus factory",
      url: "/factory-tour",
      titleSub: "Incredible: Inside the manufacturing of a F350",
      content:
        "Assembled in France using millions of components made throughout Europe: The F350 is the most modern commercial aircraft in the world. ",
      urlOut: "//youtube.com/watch?v=Yutzg2NLwcU"
    },
    {
      id: "article2",
      image: [hero2, hangar],
      title: "Long term market outlook",
      url: "/market-outlook",
      titleSub: "About Our Market",
      content:
        "A dedicated team at Flybus pores over reams of economic, airline, travel, and fleet data annually to create the market outlooks below. Each outlook, focused on a particular part of our business, offers a long-term perspective on key trends and variables that impact our view of how we best serve our customers, today and tomorrow. <br />As we developed our latest Commercial Market Outlook, we see continued opportunities for product innovation, fleet productivity and network expansion as this dynamic industry continues to evolve.<br /> From our first published market forecast in 1961, the number of commercial operators we forecast has increased to nearly 200 and passenger traffic has grown by a factor of nearly 70. More recently, since 2000, the global airline network has expanded 2.5 times, while industry innovation and productivity have enabled travelers to fly for nearly 40 percent lower average fares in real terms.<br />A dedicated team here at Boeing pores over reams of economic, airline, travel, and fleet data annually to project new airplane demand during the next 20 years. After more almost 60 years of publishing, the Boeing Commercial Market Outlook remains the industry standard as one of the longest-published and most accurate forecasts in commercial aviation. <br /> On behalf of the team of Boeing experts who analyze and compile the market forecast each year, we invite you to see how the tremendous market demand will play out in different regions of the world and across various product and services segments.<br />This year we increased the interactive data visualizations to provide even more insight and context to our forecast. You will find enhanced detail on fleet and traffic for each region of the world. The workbook below also includes the outlook for the services and air cargo markets. Navigate the storyboard tabs and hover or click on the graphics to interact with the workbook for a detailed look at the future of the aviation market."
    }
  ],
  footer: {
    utilities: ["News", "Investors", "Employee", "Merchandise"],
    categories: ["Commercial", "Defense", "Space", "Career", "Our company"],
    popular: ["Orders & Deliveries", "Highlights", "Tours", "Licensing"]
  }
};
