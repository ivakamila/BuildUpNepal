import "./EmissionsSaved.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import EmissionsImg from "../../assets/emissions-img.png";
import LazyLoad from "react-lazyload";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const EmmissionsSaved = () => {
  const data = () => {
    return {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
      datasets: [
        {
          label: "First dataset",
          data: [0.5, 10, 11000, 27000, 39000, 44000],
          fill: "start",
          backgroundColor: (context: ScriptableContext<"bar">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 100, 0, 300);
            gradient.addColorStop(0, "#1CA93B");
            gradient.addColorStop(1, "#22C847");
            return gradient;
          },
          maxBarThickness: 50,
        },
      ],
    };
  };

  let delayed;

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "CO2 emission saved over time (in Tonnes)",
        color: "#000",
        font: {
          size: 24,
          weight: 400,
        },
        position: "bottom",
        padding: {
          top: 29.58,
        },
      },
      legend: {
        display: false,
        font: {
          size: 17,
        },
      },
      tooltip: false,
      datalabels: {
        color: "#000",
        anchor: "end",
        align: "top",
        offset: 5,
        font: {
          size: 24,
        },
        formatter: (value, context) => {
          return value.toLocaleString();
        },
      },
    },
    onResize: (chart, size) => {
      if (size.width <= 510) {
        return (
          (chart.options.plugins.datalabels.font.size = 12) &&
          (chart.data.datasets[0].maxBarThickness = 16) &&
          (chart.options.scales.y.ticks.font.size = 14) &&
          (chart.options.scales.x.ticks.font.size = 14) &&
          (chart.options.plugins.title.font.size = 16) &&
          (chart.options.plugins.title.padding.top = 15)
        );
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          drawOnChartArea: false,
          tickLength: 10,
          tickColor: "#938F99",
          borderColor: "#938F99",
          offset: false,
        },
        ticks: {
          font: {
            size: 17,
          },
        },
      },
      y: {
        grid: {
          display: true,
          drawOnChartArea: false,
          tickLength: 10,
          tickColor: "#938F99",
          borderColor: "#938F99",
        },
        ticks: {
          font: {
            size: 17,
          },
          //   stepSize: 1500,
        },
      },
    },
    animation: {
      onComplete: () => {
        let delayed = true;
      },
      delay: (context: ScriptableContext<"bar">) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 500 + context.dataIndex * 100;
        }
        return delay;
      },
    },
    layout: {
      padding: {
        top: 25,
      },
    },
  };

  return (
    <div className="emissions" id="co2-saved">
      <h2>CO2 Saved</h2>
      <img src={EmissionsImg} alt="pollution in a city" />
      <p className="emissions__large-text">
        Fired bricks account for 37% of CO2 emissions in Nepal. Our mission is
        to reduce it by 2%.
      </p>
      <div className="link-container__single">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <span className="icon-link-icon"></span>World Bank report
        </a>
      </div>
      <h3>Replacing dirty bricks at scale</h3>
      <p>
        CSEB produces 50% less CO2 emissions (1), saving 9,5 tonnes per 3-room
        house build with CSEB instead of fired bricks (2).
      </p>
      <p className="text__small">Stockholm - Kathmandu, 2.5 tonne per person</p>
      <div className="airplane-animation">
        <span className="icon-airplane-1"></span>
        {/* <span className="icon-airplane-icon"></span> */}
      </div>
      <LazyLoad height={200} offset={0}>
        <div className="chart">
          <Bar data={data()} options={options} plugins={[ChartDataLabels]} />
        </div>
      </LazyLoad>
      <div className="link-containers">
        <div className="link-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon-link-icon"></span>(1) Max Fordham report
          </a>
        </div>
        <div className="link-container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="icon-link-icon"></span>(2) Asian Institute of
            Technology &amp; Management
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmmissionsSaved;
