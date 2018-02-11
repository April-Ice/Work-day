import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as echarts from 'echarts';

@Component({
	selector: 'page-chart',
	templateUrl: 'chart.html',
})
export class ChartPage {


	public chatmemu = "sales";

	public chart;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
	) {

		console.log(this.chart);


	}


	ionViewDidEnter() {
		console.log(echarts);
		this.initchart();
	}

	initchart() {
		let ec = echarts as any;
		if (!document.getElementById('chart')) {
			setTimeout(() => {
				this.initchart();
				console.log("为空，暂时进行延时处理，后期解决");
			}, 300);
		} else {
			let container = document.getElementById('chart');
			console.log('-----' + container);
			this.chart = ec.init(container);
			this.chart.setOption({
				series: {
					type: 'pie',
					data: [{
						name: 'F', value: 10
					}, {
						name: 'B', value: 20
					}, {
						name: 'C', value: 30
					}]
				}
			});
		}

	}

	public setmemu(name) {
		this.chatmemu = name;
		console.log(this.chatmemu);
		if (name == 'sales') {
			this.initchart();
		}
	}

}
