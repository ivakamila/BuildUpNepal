// import HouseIcon from "../assets/icons/house-icon.svg";
// import BricksIcon from "../assets/icons/bricks-icon.svg";
// import CarbonIcon from "../assets/icons/co2-icon.svg";
// import PeopleIcon from "../assets/icons/people-icon.svg";

export const ImpactData = [
  {
    // icon: PeopleIcon,
    icon: "icon-people-icon",
    count: 288,
    text: "Entrepreneurs",
    desc: (
      <p>
        We have 288 active enterprises/ communities building with CSEB. You can
        see the details of each enterprise on the map below including a
        breakdown of how many houses they have built, jobs created and Co2
        saved. On average each enterprise builds 10-20 houses per year and
        creates 8-10 jobs. The data is collected from our enterprises and is
        based on their reports.
      </p>
    ),
  },
  {
    // icon: HouseIcon,
    icon: "icon-house-icon",
    count: 6009,
    text: "Houses",
    desc: (
      <p>
        Each enterprise / community reports on regular basis how many bricks
        they have sold and how many houses/building have been built. If they
        don’t know exactly how many houses were built (other people bought their
        bricks and built on their own) We calculate average 3500 bricks per
        house (standard for a 4-room house) We do our best to validate the data
        by regular field visits. Each house built means on average 25% savings
        for the family compared to using traditional materials.
      </p>
    ),
  },
  {
    // icon: BricksIcon,
    icon: "icon-bricks-icon",
    count: 2896,
    text: "Jobs",
    desc: (
      <p>
        1885 jobs in construction of houses. Each enterprise reports how many
        staff they employ in the production. We measure construction work by the
        days required to build a house. A 4-room house: 235 man-days. 300
        man-days = one job for a year.
      </p>
    ),
  },
  {
    // icon: CarbonIcon,
    icon: "icon-co2-icon",
    count: 44794,
    text: "Tons CO2 Saved",
    desc: (
      <p>
        The fired brick industry is responsible for 37% of CO2 emissions from
        combustion in Nepal and is a major source of and Black carbon (
        {
          <a
            href="https://www.buildupnepal.com/wp-content/uploads/2022/05/dirty-stacks-high-stakes-an-overview-of-brick-sector-in-south-asia.pdf"
            target="_blank"
          >
            World bank, 2020
          </a>
        }
        ). Black carbon emissions in particular is contributing to pollution and
        melting of the Himalayan glacier which supplies drinking water for 1.5
        billion South Asians. Our technology saves 40-60% of CO2 emissions per
        house. For a 3 room house this equals 9.5 ton of CO2 emissions compared
        to using fired bricks. (a flight between London-Kathmandu-London emits
        approx. 2.8 ton CO2. Numbers are based on research by{" "}
        <a href="https://www.buildupnepal.com/wp-content/uploads/2022/02/carbon-evaluation-of-compressed-stabilised-earth-blocks-cseb-in-nepal-summary.pdf">
          Max fordham
        </a>{" "}
        and{" "}
        <a href="https://www.buildupnepal.com/wp-content/uploads/2022/02/carbon-evaluation-of-compressed-stabilised-earth-blocks-cseb-in-nepal-summary.pdf">
          ICIMOD Nepal and Asian Institute of Technology
        </a>
        .
      </p>
    ),
  },
];
