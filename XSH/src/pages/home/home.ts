import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { LoginPage } from '../index';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	// providers: [indexService]
})
export class HomePage {
	login: any;

	constructor(
		public nav: NavController,
	) {
		this.login = false;
	}

	public gotoLogin() {
		// this.nav.push(LoginPage);
	}

}
