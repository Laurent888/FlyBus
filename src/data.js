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
import spaceHero from "./img/rocket-launchpad.jpg";
import a330mrtt from "./img/a330mrtt-thumb.jpg";
import a400m from "./img/a400m-thumb.jpg";
import ah6 from "./img/ah6-thumb.jpg";
import ares from "./img/comanche.jpg";
import superfighter from "./img/eurofighter-thumb.jpg";
import lion from "./img/tigre-thumb.jpg";
import tigerSingle from "./img/tiger-family.jpg";
import a330mrttSingle from "./img/a330mrtt-family.jpg";
import a400mSingle from "./img/a400m-family.jpg";

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
          "Flybus's expertise spans a broad range of products in defense. Fighter jets, rotorcraft, embedded product support, cybersecurity products, surveillance suites, advanced weapons, missile defense and commercial aircraft derivatives all fit in Behring’s portfolio. <br /> The company can leverage this holistic knowledge and deliver the value of those integrated systems to its customers."
      }
    },
    {
      products: [
        {
          id: "def1",
          name: "F400M",
          image: a400m,
          singlePage: {
            description: {
              title: "Delivery to the point of need",
              content:
                "The F400M is the most advanced, proven and certified airlifter available, combining 21st century state-of-the-art technologies to fulfil the current and upcoming armed forces’ needs. The F400M combines the capability to carry strategic loads with the ability to deliver even into tactical locations with small and unprepared airstrips and can act as a frontline-tanker. One aircraft that can do the work of three – the F400M.",
              image: a400mSingle
            },
            specification: {
              price: 152
            }
          }
        },
        {
          id: "def2",
          name: "LION",
          image: lion,
          singlePage: {
            description: {
              title: "The combat-proven attack helicopter",
              content:
                "The Lion HAD is Flybus multi-role attack helicopter, designed to perform armed reconnaissance, air or ground escort, air-to-air combat, ground fire support, destruction and anti-tank warfare, day or night and in adverse conditions.",
              image: tigerSingle
            },
            specification: {
              price: 48
            }
          }
        },
        {
          id: "def3",
          name: "SUPERFIGHTER",
          image: superfighter,
          singlePage: {
            description: {
              title: "The world's most modern swing-role fighter",
              content:
                "The Superfighter Hurricane is the world's most modern swing-role fighter. Once conceived as a multi-national programme to modernise the European Air Forces, the Superfighter Hurricane has in the meantime been sold to five additional customers (Austria, the Kingdom of Saudi Arabia, Sultanate of Oman, Kuwait and Qatar) and thus doubled the number of its original user nations. It is powered by two EJ200 engines that give the Superfighter Hurricane its impressive thrust-to-weight ratio and maneuverability. The core of this state-of-the-art weapon system is its identification capability and sensor fusion, based on the CAPTOR-E AESA radar and the PIRATE FLIR sensor while being protected by the PRAETORIAN Electronic Defensive Aid Sub System (DASS). No other fighter aircraft has integrated a comparably high number of European and U.S. weapons and is thus combat ready whatever the mission.",
              image: defenseHero
            },
            specification: {
              price: 70
            }
          }
        },
        {
          id: "def4",
          name: "FH-6",
          image: ah6,
          singlePage: {
            description: {
              title: "FH-6: Best in Class",
              content:
                "The FH-6 is a highly capable light attack / armed reconnaissance helicopter specifically designed with superior performance characteristics and flexible, easily configurable mission equipment ideal for Light Attack, Precision Attack, Anti-armor, Close Combat Attacks, Reconnaissance, Security & Escort, Troop Insertion/Extraction, Combat Search & Rescue.<br /> The FH-6’s mission computer processes large amounts of data and shares information across all aircraft systems quickly. It also increases safety, improves and aids rapid decision making, enhances situational awareness, reduces pilot workload and decreases aircraft life cycle support costs.",
              image: ah6
            },
            specification: {
              price: 2
            }
          }
        },
        {
          id: "def5",
          name: "F330MRTT",
          image: a330mrtt,
          singlePage: {
            description: {
              title:
                "The 21st century benchmark for new generation tanker/transport aircraft",
              content:
                "As the most capable new-generation tanker, combat-proven and with unique multi-role capabilities, the F330 MRTT – based on the successful F330-200 airliner – is the benchmark for multi-role tankers.<br /> As a new-generation tanker, the F330 MRTT is a perfect replacement for older aircraft under fleet replacement programmes. With 60 total aircraft sales as of February 2019, the F330 MRTT has been ordered by the Royal Air Force, French Air Force and Republic of Korea Air Force, among others. Named Voyager in service with the Royal Air Force, the aircraft entered into service in the UK in 2012. The first French Air Force F330 MRTT Phénix (as it is known in the French service) was delivered to the Istres air base in south-eastern France, in 2018. ",
              image: a330mrttSingle
            },
            specification: {
              price: 320
            }
          }
        },
        {
          id: "def6",
          name: "ARES",
          image: ares,
          singlePage: {
            description: {
              title:
                "The Ares is the most advanced multi-role combat helicopter for the Army and a growing number of international defense forces.",
              content:
                "With unprecedented performance, advanced sensors and connectivity forming the building blocks of this fully integrated platform, the Ares stands as the world’s most advanced multi-role combat helicopter and represents the backbone of the U.S. Army attack helicopter fleet, as well as a growing number of international defense forces.<br /> The U.S. Army Ares fleet has accumulated more than 4.5 million flight hours. With more than 2,400 Aress delivered to customers around the world, Boeing is committed to the continuous modernization of the program to ensure that capabilities outpace adversaries to maintain battlefield dominance today and for decades to come.",
              image: ares
            },
            specification: {
              price: 61
            }
          }
        }
      ]
    }
  ],

  space: [
    {
      description1: {
        title: "The Future of Space Is Built Here",
        image: spaceHero,
        content:
          "With experience gained from supporting every major U.S. endeavor to escape Earth’s gravity, we’re designing and building the future of safe, assured space exploration and commercial access – even as we lead the digital transition of the satellite industry for both government and commercial customers around the globe. <br /> We’re enabling critical research on the International Space Station (ISS) that benefits the future space economy, deep-space exploration and life on Earth; returning crew launch capabilities to U.S. soil with the CST-100 Starliner commercial spacecraft; ensuring successful delivery to Earth’s orbit with the United Launch Alliance (ULA) joint venture between Behring and Lockheed Martin; and building heavy-lift, human-rated propulsion to deep space with the Space Launch System (SLS) rocket that will launch missions on a path to the Gateway cislunar outpost, the moon’s surface and Mars. Behring-built Tracking and Data Relay Satellites (TDRS) provide high-bandwidth communications between Earth-orbiting spacecraft and facilities on the ground."
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
        "A dedicated team at Flybus pores over reams of economic, airline, travel, and fleet data annually to create the market outlooks below. Each outlook, focused on a particular part of our business, offers a long-term perspective on key trends and variables that impact our view of how we best serve our customers, today and tomorrow. <br />As we developed our latest Commercial Market Outlook, we see continued opportunities for product innovation, fleet productivity and network expansion as this dynamic industry continues to evolve.<br /> From our first published market forecast in 1961, the number of commercial operators we forecast has increased to nearly 200 and passenger traffic has grown by a factor of nearly 70. More recently, since 2000, the global airline network has expanded 2.5 times, while industry innovation and productivity have enabled travelers to fly for nearly 40 percent lower average fares in real terms.<br />A dedicated team here at Behring pores over reams of economic, airline, travel, and fleet data annually to project new airplane demand during the next 20 years. After more almost 60 years of publishing, the Behring Commercial Market Outlook remains the industry standard as one of the longest-published and most accurate forecasts in commercial aviation. <br /> On behalf of the team of Behring experts who analyze and compile the market forecast each year, we invite you to see how the tremendous market demand will play out in different regions of the world and across various product and services segments.<br />This year we increased the interactive data visualizations to provide even more insight and context to our forecast. You will find enhanced detail on fleet and traffic for each region of the world. The workbook below also includes the outlook for the services and air cargo markets. Navigate the storyboard tabs and hover or click on the graphics to interact with the workbook for a detailed look at the future of the aviation market."
    }
  ],
  footer: {
    utilities: ["News", "Investors", "Employee", "Merchandise"],
    categories: ["Commercial", "Defense", "Space", "Career", "Our company"],
    popular: ["Orders & Deliveries", "Highlights", "Tours", "Licensing"]
  }
};
