import { Device } from '../plugin/native';


export const Agent = {
    Platform: 'Browser',
    Version: '6.2.0'
};

// export const Sites = {
//     portal: 'https://www.incnjp.com/',
//     static: 'https://s01.incnjp.com/',
//     ucenter: 'https://user.incnjp.com/',
//     webview: 'https://m.incnjp.com/webview/',
//     baseapi: 'https://m.incnjp.com/api/v6/'
// };

export const Sites = {
    portal: 'http://cike360.com',
    static: 'http://cike360.com',
    ucenter: 'http://cike360.com',
    webview: 'http://cike360.com',
    baseapi: 'https://jsonplaceholder.typicode.com'
};

// export const Package = {
//     Domain: 'incnjp.com',
//     Version: '17.3.1',
//     Build: '171800',
//     Debug: false
// };

export const Package = {
    Domain: 'cike360.com',
    Version: '1.0.0',
    Build: '180208',
    Debug: false
};

//设置平台属性
document.addEventListener('deviceready', () => {
    Agent.Platform = Device.platform;
});

//探测调试模式
// let host = location && location.hostname;
// if (host && /xiaochun\.us$/.test(host)) {
//     Package.Debug = true;
//     Package.Domain = 'xiaochun.us';
//     Object.keys(Sites).forEach(k => {
//         Sites[k] = Sites[k].replace('https://', 'http://');
//         Sites[k] = Sites[k].replace('incnjp.com', 'xiaochun.us');
//     });
// }


//探测调试模式
let host = location && location.hostname;
if (host && /xiaochun\.us$/.test(host)) {
    Package.Debug = true;
    Package.Domain = 'XISHIHUI';
    Object.keys(Sites).forEach(k => {
        Sites[k] = Sites[k].replace('https://', 'http://');
        Sites[k] = Sites[k].replace('cike.com', 'localhost');
    });
}
