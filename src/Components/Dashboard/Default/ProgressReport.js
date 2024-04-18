/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
function progress() {
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "School Expenditure Data"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "transport" },
					{ y: 49, label: "staff" },
					{ y: 9, label: "stationary" },
					{ y: 5, label: "Sports" },
					{ y: 19, label: "Lab equipments" }
				]
			}]
		}
		return (
            
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
        
		
	
        )
    }


export default progress;