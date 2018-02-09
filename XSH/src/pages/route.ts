import { DeepLinkConfig } from 'ionic-angular';

import * as Pages from './index';


export const RouteConfig: DeepLinkConfig = {
    links: [
        { component: Pages.HomePage, name: 'home', segment: 'home' },
        { component: Pages.LoginPage, name: 'login', segment: 'login' },
        { component: Pages.ChartPage, name: 'chart', segment: 'chart' },
        // { component: Pages.ListPage, name: 'list', segment: 'list' },
        // { component: Pages.LoginPage, name: 'login', segment: 'reader/setting' },
    ]
};
