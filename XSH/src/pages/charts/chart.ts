import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as echarts from 'echarts';

@Component({
	selector: 'page-chart',
	templateUrl: 'chart.html',
})
export class ChartPage {


	public chatmemu = "sales";

	public echartOption: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		console.log(echarts);

	}

	ionViewDidEnter() {
		const ec = echarts as any;
		const container = document.getElementById('chart');
		const chart = ec.init(container);
		console.log(chart);

		chart.setOption({
			series: {
				type: 'pie',
				data: [{
					name: 'A', value: 10
				}, {
					name: 'B', value: 20
				}, {
					name: 'C', value: 30
				}]
			}
		});
	}

	public setmemu(name) {
		this.chatmemu = name;
		console.log(this.chatmemu);
	}

}
