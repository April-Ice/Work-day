import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MemberService } from '../../providers/member';


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
	}

	formSubmit(form) {
		console.log("登录");
		// form.cookietime = '2592000';
		// form.fastloginfield = 'username';
		// form.auth = this.myform.auth || '';
		// this.service.login(form).then(data => {
			// this.myform.auth = data.auth;
			//登陆成功
			// if (data.errkey == 'login_succeed') {
				// this.myform.question = false;
				// this.myform.seccode = '';
				// this.myform.auth = '';
				// this.logined();
			// }
		// });
	}
}
