import React from "react";
import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";

class ChartTypePie extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="chart-type-pie">
				<PieChart highcharts={this.props.highcharts} options={this.props.options} />
			</div>
		);
	}
}

export default ChartTypePie;