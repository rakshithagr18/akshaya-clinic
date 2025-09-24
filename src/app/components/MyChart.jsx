"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Sales",
                data: [12, 19, 3, 5, 2],
                backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: "Monthly Sales Data",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "X-axis Label",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Y-axis Label",
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default MyChart;

