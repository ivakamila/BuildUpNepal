import "./EmissionsSaved.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import EmissionsImg from "../../assets/emissions-img.png";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

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
            gradient.addColorStop(0, "#1863AF");
            gradient.addColorStop(1, "#09ADEA");
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
          (chart.options.plugins.datalabels.font.size = 14) &&
          (chart.data.datasets[0].maxBarThickness = 18) &&
          (chart.options.scales.y.ticks.font.size = 14) &&
          (chart.options.scales.x.ticks.font.size = 14)
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
          delay = context.dataIndex * 1000 + context.dataIndex * 100;
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
    <div className="emissions">
      <h2>CO2 Saved</h2>
      <img src={EmissionsImg} alt="pollution in a city" />
      <p>
        Fired bricks account for 37% of CO2 emissions in Nepal. Our mission is
        to reduce it by 2%.
      </p>
      <div className="emissions__link--container">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <span className="material-icons">link</span>World Bank report
        </a>
      </div>
      <h3>Replacing dirty bricks at scale</h3>
      <p>
        CSEB produces 50% less CO2 emissions (1), saving 9,5 tonnes per 3-room
        house build with CSEB instead of fired bricks (2).
      </p>
      <div className="emissions__chart">
        <Bar data={data()} options={options} plugins={[ChartDataLabels]} />
      </div>
      <p className="emissions__chart__desc">
        CO2 emission saved over time (in Tonnes)
      </p>
      <div className="emissions__link--containers">
        <div className="emissions__link--container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">link</span>(1) Max Fordham report
          </a>
        </div>
        <div className="emissions__link--container">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <span className="material-icons">link</span>(2) Asian Institute of
            Technology &amp; Management
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmmissionsSaved;