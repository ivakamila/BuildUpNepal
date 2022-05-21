import "./CreatedHousesChart.scss";
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
import LazyLoad from "react-lazyload";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const CreatedHousesChart = () => {
  const data = () => {
    return {
      labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
      datasets: [
        {
          label: "First dataset",
          data: [110, 495, 1540, 2654, 4430, 6009],
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
      title: {
        display: true,
        text: "Cumulative total houses created over time.",
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
    <div className="houses-chart__container" id="eco-friendly-housing">
      <span className="icon-house-icon"></span>
      <h2>Eco-friendly, Safe and Affordable Homes</h2>
      <p>
        Build up Nepal&apos;s mission is to make safe, eco-friendly housing
        affordable for all.
      </p>
      <LazyLoad height={200} offset={0}>
        <div className="chart">
          <Bar data={data()} options={options} plugins={[ChartDataLabels]} />
        </div>
      </LazyLoad>
    </div>
  );
};

export default CreatedHousesChart;
