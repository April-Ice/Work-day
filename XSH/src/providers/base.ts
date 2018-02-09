import { Injectable, Injector } from '@angular/core';

import { Storage } from '@ionic/storage';

import { BridgeHelper } from '../helpers/bridge';


@Injectable()
export class BaseService {

    public cache: Storage;

    protected bridge: BridgeHelper;

    constructor(injector: Injector) {
        this.cache = injector.get(Storage);
        this.bridge = injector.get(BridgeHelper);
    }

    // get uid() {
    //     return this.bridge.general.uid;
    // }
    // set uid(v) {
    //     this.bridge.general.uid = v || 0;
    // }

    // get username() {
    //     return this.bridge.general.username;
    // }

    // get moderator() {
    //     return this.bridge.general.moderator;
    // }

    // get newprompt() {
    //     return this.bridge.general.newprompt;
    // }

    // get dateline() {
    //     return this.bridge.general.dateline;
	// }


    /**
     * @param type [card|password|publish|post|login|register]
     */
    public secure(type) {
        let query = {
            mdx: 'secure', type: type
        };
        return this.bridge.get('misc', query).then(data => {
            if (data.seccode) {
                data.seccode += '&t' + Date.now();
            }
            return data;
        });
    }

    public seccode() {
        if (this.bridge.istoken) {
            let token = this.bridge.general.xtoken;
            return 'misc?mod=seccode&xtoken=' + token;
        }
        return 'misc?mod=seccode&t' + Date.now();
    }

}
