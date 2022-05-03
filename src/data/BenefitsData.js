import LowerCostOne from "../assets/benefits/lower-cost-1.png";
import LowerCostTwo from "../assets/benefits/lower-cost-2.png";
import LowerEmmissions from "../assets/benefits/lower-emmissions.png";

export const BenefitsData = [
  {
    bgImage: LowerCostOne,
    percentage: "40% lower cost",
    smallText: "When building CSEB wall",
    data: {
      datasets: [
        {
          data: [40, 60],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          hoverOffset: 4,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 2000,
      },
    },
  },
  {
    bgImage: LowerCostTwo,
    percentage: "25% lower cost",
    smallText: "When building two room house",
    data: {
      datasets: [
        {
          data: [25, 75],
          backgroundColor: ["rgba(24, 99, 175, 0.6)", "rgba(0, 0, 0, 0)"],
          hoverOffset: 4,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 2000,
      },
    },
  },
  {
    bgImage: LowerEmmissions,
    percentage: "50% lower emmisions",
    smallText: "Then fired bricks",
    data: {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ["rgba(34, 200, 71, 0.5)", "rgba(0, 0, 0, 0)"],
          hoverOffset: 4,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        tooltip: false,
        legend: false,
      },
      animation: {
        duration: 2000,
      },
    },
  },
];
