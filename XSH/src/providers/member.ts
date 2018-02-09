import { Injectable, Injector } from '@angular/core';

import { BaseService } from './base';


@Injectable()
export class MemberService extends BaseService {

    constructor(injector: Injector) {
        super(injector);
	}

	public getTest() {
		let query = {};
		let url = '/photos';
        return this.bridge.get(url, query);
    }

    // public login(query) {
    //     query.loginsubmit = 'yes';
    //     return this.bridge.post('member?mod=logging&action=login', query);
    // }

    // public logout() {
    //     let query = {
    //         mod: 'logging',
    //         action: 'logout',
    //         formhash: this.bridge.general.formhash
    //     };
    //     return this.bridge.get('member', query);
    // }

    // public lostpw(query) {
    //     query.lostpwsubmit = 'yes';
    //     query.formhash = this.bridge.general.formhash;
    //     return this.bridge.post('member?mod=lostpasswd', query);
    // }

    // public register(query) {
    //     query.regsubmit = 'yes';
    //     query.activationauth = '';
    //     query.formhash = this.bridge.general.formhash;
    //     return this.bridge.post('member?mod=jionxc', query);
    // }

}
