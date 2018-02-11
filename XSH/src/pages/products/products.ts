import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
	selector: 'page-products',
	templateUrl: 'products.html',
	// providers: [indexService]
})
export class ProductsPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams
	) {
	}

}
