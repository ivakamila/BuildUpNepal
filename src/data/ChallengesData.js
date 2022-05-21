import PovertyImg from "../assets/challenges/poverty.png";
import UnsafeHousingImg from "../assets/challenges/unsafe-housing.png";
import DirtyBricksImg from "../assets/challenges/dirty-bricks.png";

export const ChallengesData = [
  {
    img: PovertyImg,
    title: "Poverty",
    desc: "28.6% of Nepal’s population live in poverty.",
    text: (
      <p>
        In Nepal 28.6% of the population lives in poverty, of which 95% reside
        in rural areas (
        <a
          href="https://www.npc.gov.np/images/category/Nepal_MPI.pdf"
          target="_blank"
        >
          Nepal Planning Commission, 2018
        </a>
        ). As evidenced by the size of the outmigrant population and its 24%
        share of GDP, the lack of economic opportunity is rampant.{" "}
        <a
          href="https://www.buildupnepal.com/wp-content/uploads/2022/04/ilo-report-on-employment-relationship-survey-in-the-brick-indistry-in-nepal.pdf"
          target="_blank"
        >
          ILO’s 2017
        </a>{" "}
        figures indicate a 35% of youth is not in employment, education, or
        training. The situation is UNSUSTAINABLE and UNACCEPTABLE.
      </p>
    ),
  },
  {
    img: UnsafeHousingImg,
    title: "Unsafe housing",
    desc: "50% of housing stock do not meet safety standards.",
    text: (
      <p>
        In Nepal 49% of houses do not meet the standards for safe housing (
        <a
          href="https://unstats.un.org/unsd/demographic/sources/census/wphc/Nepal/Nepal-Census-2011-Vol1.pdf"
          target="_blank"
        >
          Government of Nepal - Population census, 2011
        </a>
        ). While the urban poor are often housed in slums, traditional houses in
        rural Nepal are made of mud and stone or bamboo and mud. As a result,
        the 2015 Nepal earthquake destroyed 866,207 houses and the 2017 floods
        destroyed 43,400 houses and left 191,700 partially destroyed (
        <a
          href="http://www.nra.gov.np/en/mapdistrict/datavisualization"
          target="_blank"
        >
          National Reconstruction Authority
        </a>
        ). Building new houses remains expensive for low-income households due
        to costly transport for far-away fired bricks, high quantities of cement
        for fired brick masonry and ever-increasing material prices.
      </p>
    ),
  },
  {
    img: DirtyBricksImg,
    title: "Fired bricks & Climate change",
    desc: "Responsible for 37% of CO2 emissions in Nepal and widespread child labour.",
    text: (
      <p>
        The fired brick industry is a major climate issue, responsible for 37%
        of CO2 emissions from combustion in Nepal, 17% in Bangladesh and 6% in
        India. (
        <a
          href="https://www.buildupnepal.com/wp-content/uploads/2022/05/dirty-stacks-high-stakes-an-overview-of-brick-sector-in-south-asia.pdf"
          target="_blank"
        >
          World bank, 2020
        </a>
        ) Fired bricks is also a major source of black carbon, causing pollution
        and melting of the Himalayan glacier which supplies drinking water for
        1.5 billion people. The brick industry is booming in South Asia,
        estimated to grow by 8% annually until 2025 and Fired Bricks is the most
        used material for new housing. Additionally poor working conditions,
        child labour, and hazardous air pollution is widespread (
        <a
          href="https://www.buildupnepal.com/wp-content/uploads/2022/04/ilo-report-on-employment-relationship-survey-in-the-brick-indistry-in-nepal.pdf"
          target="_blank"
        >
          ILO’s 2017
        </a>
        )
      </p>
    ),
  },
];
