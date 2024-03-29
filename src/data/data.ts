type PlanetData = {
  title: string;
  color: string;
  source: string;
  additionalInformation: {
    rotation_time_value: string;
    revolution_time_value: string;
    radius_value: string;
    average_temp_value: string;
  };
  // rotation_time: string;
  // revolution_Time: string;
  // radius: string;
  // average_temp: string;
  information: {
    overview: {
      imageSource?: string;
      title: string;
      content: string;
      secondary_img?: string;
    };
    internal_structure: {
      title: string;
      content: string;
      imageSource: string;
      secondary_img?: string;
    };
    surface_geology: {
      title: string;
      content: string;
      imageSource: string;
      secondary_img: string;
    };
  };
};

const data: PlanetData[] = [
  {
    title: "mercury",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "58.6 hours",
      revolution_time_value: "87.97 days",
      radius_value: "2,439.7 km",
      average_temp_value: "430°c",
    },
    information: {
      overview: {
        imageSource: "/images/overview-photos/mercury-overview.png",
        title: "01 OVERVIEW",
        content: `Mercury is the smallest planet in the Solar System and the closest to the Sun.
         Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
         Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`,
      },
      internal_structure: {
        content: `Mercury appears to have a solid silicate crust and mantle overlying a solid, iron 
          sulfide outer core layer, a deeper liquid core layer, and a solid inner core. 
          The planet's density is the second highest in the Solar System at 5.427 g/cm3 ,
           only slightly less than Earth's density.,`,
        imageSource:
          "/images/internal-structure-photos/planet-mercury-internal.svg",
        title: "02 Internal Structure",
      },

      surface_geology: {
        title: "03 Surface Geology",
        content: ` Mercury's surface is similar in appearance to that of the Moon, showing 
            extensive mare-like plains and heavy cratering, indicating that it has been
             geologically inactive for billions of years. It is more heterogeneous than 
             either Mars's or the Moon’s.`,
        imageSource: "/images/overview-photos/mercury-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-mercury.png",
      },
    },
  },
  {
    title: "VENUS",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "243 days",
      revolution_time_value: "224.7 days",
      radius_value: "6,051.8 km",
      average_temp_value: "471°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Venus is the second planet from the Sun. It is named after the Roman goddess
         of love and beauty. As the brightest natural object in Earth's night sky after the Moon,
          Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad
           daylight.`,
        imageSource: "/images/overview-photos/venus-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `The similarity in size and density between Venus and Earth suggests they share a similar
           internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most
            likely at least partially liquid because the two planets have been cooling at about the
             same rate.`,
        imageSource:
          "/images/internal-structure-photos/planet-venus-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: ` Much of the Venusian surface appears to have been shaped by volcanic activity.
         Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that
          are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the
           Big Island of Hawaii.`,
        imageSource: "/images/overview-photos/venus-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-venus.png",
      },
    },
  },
  {
    title: "EARTH",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "0.99 days",
      revolution_time_value: "365.26 days",
      radius_value: "6,371 km",
      average_temp_value: "16°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Third planet from the Sun and the only known planet to harbor life. About 29.2% 
        of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from
         the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
        imageSource: "/images/overview-photos/earth-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `Earth's interior, like that of the other terrestrial planets, is divided into layers by their
           chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate
            solid crust, which is underlain by a highly viscous solid mantle.`,
        imageSource:
          "/images/internal-structure-photos/planet-earth-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `The total surface area of Earth is about 510 million km2. The continental crust consists
         of lower density material such as the igneous rocks granite and andesite. Less common is basalt, 
         a denser volcanic rock that is the primary constituent of the ocean floors.`,
        imageSource: "/images/overview-photos/earth-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-earth.png",
      },
    },
  },
  {
    title: "MARS",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "1.03 days",
      revolution_time_value: "1.88 years",
      radius_value: "3,389.5 km",
      average_temp_value: "−28°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar
         System, being larger than only Mercury. In English, Mars carries the name of the Roman god 
         of war and is often referred to as the "Red Planet".`,
        imageSource: "/images/overview-photos/mars-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `Like Earth, Mars has differentiated into a dense metallic core overlaid by
           less dense materials. Scientists initially determined that the core is at least
            partially liquid. Current models of its interior imply a core consisting primarily
             of iron and nickel with about 16–17% sulfur.`,
        imageSource:
          "/images/internal-structure-photos/planet-mars-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `Mars is a terrestrial planet whose surface consists of minerals containing
         silicon and oxygen, metals, and other elements that typically make up rock. The surface
          is primarily composed of tholeiitic basalt, although parts are more silica-rich than
           typical basalt.`,
        imageSource: "/images/overview-photos/mars-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-mars.png",
      },
    },
  },
  {
    title: "jupiter",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "9.93 hours",
      revolution_time_value: "11.86 years",
      radius_value: "69,911 km",
      average_temp_value: "-108°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Jupiter is the fifth planet from the Sun and the largest in the Solar System.
         It is a gas giant with a mass two and a half times that of all the other planets in
          the Solar System combined, but less than one-thousandth the mass of the Sun.`,
        imageSource: "/images/overview-photos/jupiter-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into
           its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million
            years after Jupiter's formation, which would have disrupted an originally solid Jovian core.`,
        imageSource:
          "/images/internal-structure-photos/planet-jupiter-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic 
        storm located 22° south of the equator. It is known to have existed since at least 1831,
         and possibly since 1665.`,
        imageSource: "/images/overview-photos/jupiter-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-jupiter.png",
      },
    },
  },
  {
    title: "saturn",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "10.8 hours",
      revolution_time_value: "29.46 years",
      radius_value: "58,232 km",
      average_temp_value: "-138°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Saturn is the sixth planet from the Sun and the second-largest in the Solar
         System, after Jupiter. It is a gas giant with an average radius of about nine and a
          half times that of Earth. It only has one-eighth the average density of Earth.`,
        imageSource: "/images/overview-photos/saturn-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `Despite consisting mostly of hydrogen and helium, most of Saturn's mass is 
           not in the gas phase, because hydrogen becomes a non-ideal liquid when the 
            density is above 0.01 g/cm3, which is reached at a radius containing 99.9% 
            of Saturn's mass.`,
        imageSource:
          "/images/internal-structure-photos/planet-saturn-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
        helium by volume. The planet's most famous feature is its prominent ring system, which
         is composed mostly of ice particles with a smaller amount of rocky debris and dust. `,
        imageSource: "/images/overview-photos/saturn-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-saturn.png",
      },
    },
  },
  {
    title: "Uranus",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "17.2 hours",
      revolution_time_value: "84 years",
      radius_value: "25,362 km",
      average_temp_value: "-195°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Uranus is the seventh planet from the Sun. Its name is a reference to 
         the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
         of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in
          the Solar System.`,
        imageSource: "/images/overview-photos/uranus-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `The standard model of Uranus's structure is that it consists of three layers:
           a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle
            and an outer gaseous hydrogen/helium envelope. The core is relatively small,
             with a mass of only 0.55 Earth masses.`,
        imageSource:
          "/images/internal-structure-photos/planet-uranus-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
        of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms 
        per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
        imageSource: "/images/overview-photos/uranus-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-uranus.png",
      },
    },
  },
  {
    title: "Neptune",
    color: "rgba(222, 244, 252, 1)",
    source: "Source : Wikipedia",
    additionalInformation: {
      rotation_time_value: "17.2 hours",
      revolution_time_value: "84 years",
      radius_value: "25,362 km",
      average_temp_value: "-195°c",
    },
    information: {
      overview: {
        title: "01 OVERVIEW",
        content: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the 
        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
        and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin 
        Uranus.`,
        imageSource: "/images/overview-photos/neptune-overview.png",
      },
      internal_structure: {
        title: "02 Internal Structure",
        content: `Neptune's internal structure resembles that of Uranus. Its atmosphere forms 
          about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. 
          Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
        imageSource:
          "/images/internal-structure-photos/planet-neptune-internal.svg",
      },
      surface_geology: {
        title: "03 Surface Geology",
        content: `Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane
         is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm,
          in the red and infrared portion of the spectrum.`,
        imageSource: "/images/overview-photos/neptune-overview.png",

        secondary_img: "/images/surface-geology-photos/geology-neptune.png",
      },
    },
  },
];

export const topicMapping = {
  Overview: "overview",
  Internal: "internal_structure",
  Surface: "surface_geology",
};

export const planetNames = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

export const planetColors = [
  "#419EBB",
  "#EDA249",
  "#6D2ED5",
  "#D14C32",
  "#D83A34",
  "#CD5120",
  "#1ec2a4",
  "#2d68f0",
];
// list for desktop resolution
export const arr = [
  "01   Overview",
  "02   Internal Structure",
  "03   Surface Geology",
];
//list for mobile resoultion
export const arr2 = ["overview", "structure", "surface"];

export default data;
