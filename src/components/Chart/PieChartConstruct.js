import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";

// Import our demo components
import ChartTypePie from "./ChartConstruct.js";

let options = {
	chart: {
		type: "pie",
		height: 150,
		width: 150,
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
	},
	credits: {
		enabled: false,
	},
	exporting: {
		enabled: false,
	},
	plotOptions: {
		pie: {
			borderWidth: 0,
			shadow: false,
			center: ["50%", "50%"],
			dataLabels: false,
			states: {
				hover: {
					brightness: 0.01,
					halo: {
						size: 0,
					},
				},
			},
		},
	},
	title: false,
	tooltip: {
		valueSuffix: "%",
		backgroundColor: "#fff",
		borderRadius: "8",
		borderWidth: 0,
	},
	series: {
		data: null,
	}
};

class PieChartWrap extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch("../../data/portfoliodata.json")
			.then(response => response.ok && response.json())
			.then(data => {
				let newData = JSON.stringify(data);
				console.log(newData)
				for (let i = 0; i < data.coins_invested.length; i++) {
					newData.push({
						y: data.coins_invested[i].allocation,
						color: data.coins_invested[i].color,
						name: data.coins_invested[i].name,
					});
				}
				options.series[0].data = newData;

				this.setState({ data: newData });
			}).catch(error => console.error(error.message));
	}

	render() {
		return <ChartTypePie highcharts={Highcharts} options={options} />;
	}
}

export default PieChartWrap;