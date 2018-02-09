import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MemberService } from '../../providers/member';
import { HomePage } from '../home/home';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	providers: [MemberService]
})
export class LoginPage {
	login: any;

	constructor(
		public nav: NavController,
		public service: MemberService
	) {
		this.getTest();
	}

	getTest() {
		console.log("getTest");
		this.service.getTest().then(data => {
			console.log(data);
		});
	}

	formSubmit(form) {
		console.log("登录");
		if(true){
			this.nav.push(HomePage);
		}
		// form.cookietime = '2592000';
		// form.fastloginfield = 'username';
		// form.auth = this.myform.auth || '';
		// this.service.login(form).then(data => {
		// 	this.myform.auth = data.auth;
		// 	登陆成功
		// 	if (data.errkey == 'login_succeed') {
		// 		this.myform.question = false;
		// 		this.myform.seccode = '';
		// 		this.myform.auth = '';
		// 		this.logined();
		// 	}
		// });
	}
}
