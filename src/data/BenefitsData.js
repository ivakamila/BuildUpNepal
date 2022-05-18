import LowerCostOne from "../assets/benefits/lower-cost-one.jpg";
import LowerCostOne1x from "../assets/benefits/lower-cost-one-1x.jpg";
import LowerCostOne2x from "../assets/benefits/lower-cost-one-2x.jpg";
import LowerCostTwo from "../assets/benefits/lower-cost-two.jpg";
import LowerCostTwo1x from "../assets/benefits/lower-cost-two-1x.jpg";
import LowerCostTwo2x from "../assets/benefits/lower-cost-two-2x.jpg";
import LowerEmissions from "../assets/benefits/lower-emissions.jpg";
import LowerEmissions1x from "../assets/benefits/lower-emissions-1x.jpg";
import LowerEmissions2x from "../assets/benefits/lower-emissions-2x.jpg";

export const BenefitsData = [
  {
    bgImage: [LowerCostOne, LowerCostOne1x, LowerCostOne2x],
    percentage: "40% lower cost",
    smallText: "When building a CSEB wall",
    data: {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(24, 99, 175, 0.9)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
  },
  {
    bgImage: [LowerCostTwo, LowerCostTwo1x, LowerCostTwo2x],
    percentage: "25% lower cost",
    smallText: "When building a 2 room house",
    data: {
      datasets: [
        {
          data: [25, 75],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(24, 99, 175, 0.9)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
  },
  {
    bgImage: [LowerEmissions, LowerEmissions1x, LowerEmissions2x],
    percentage: "50% lower emisions",
    smallText: "Than fired bricks",
    data: {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ["rgba(34, 200, 71, 0.5)", "rgba(0, 0, 0, 0)"],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 4,
          hoverBackgroundColor: [
            "rgba(34, 200, 71, 0.8)",
            "rgba(196, 77, 86, 0.8)",
          ],
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 3000,
      },
    },
  },
];
