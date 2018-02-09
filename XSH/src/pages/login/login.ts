import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	// providers: [indexService]
})
export class LoginPage {
	login: any;

	constructor(
		public nav: NavController,
	) {
		this.login = false;
	}
}
