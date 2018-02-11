import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//--------------待解决问题  不能直接引用index-----------------------------
// import { LoginPage } from '../index';
//----------------------------------------------------------------------
import { LoginPage } from '../login/login';
import { ChartPage } from '../charts/chart';
import { ProductsPage } from '../products/products';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	// providers: [indexService]
})
export class HomePage {
	login: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
		this.login = true;
	}

	gotoLogin() {
		console.log("gotoLogin");
		this.navCtrl.push(LoginPage);
	}

	gotoChart() {
		console.log("gotoChart");
		this.navCtrl.push(ChartPage);
	}

	gotoProducts() {
		console.log("gotoProducts");
		this.navCtrl.push(ProductsPage);
	}
}
