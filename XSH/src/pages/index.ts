// 模块列表
// --------------------------------------------------
// 请将本目录下所有模块导出，方便从任意地方快速调用
//

import { HomePage } from './home/home';
import { LoginPage } from './login/login';
import { ChartPage } from './charts/chart';

export const Pages = [
	HomePage,
	LoginPage,
	ChartPage
];

export {
	HomePage,
	LoginPage,
	ChartPage
};
