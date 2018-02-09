import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, ResponseOptions } from '@angular/http';

import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FileUploader } from 'ng2-file-upload';

import { Agent, Sites } from './adpter';
import { httpBuildQuery } from './util';


@Injectable()
export class BridgeHelper {

    public istoken = false;

    public general = {
        uid: 0,
        username: '',
        moderator: 0,
        newprompt: 0,
        dateline: '',
        formhash: '',
        xtoken: ''
    };

    public message = {
        key: '',
        str: '',
        val: {}
    };

    constructor(
        private http: Http,
        private cache: Storage,
        private toast: ToastController
    ) {
        this.cache.get('bridge/general').then(data => {
            this.general = data || {};
        });
    }

    public get(path: string, query = {}) {
        return this.request({
            method: 'Get',
            url: Sites.baseapi + path,
            search: httpBuildQuery(query),
            headers: this.buildHeader(null),
            withCredentials: true
        });
    }

    public post(path: string, query: {}, extra = {}) {
        return this.request({
            method: 'Post',
            url: Sites.baseapi + path,
            search: httpBuildQuery(extra),
            headers: this.buildHeader('url'),
            withCredentials: true,
            body: httpBuildQuery(query)
        });
    }

    public postf(path: string, query: FormData, extra = {}) {
        return this.request({
            method: 'Post',
            url: Sites.baseapi + path,
            search: httpBuildQuery(extra),
            headers: this.buildHeader(null),
            withCredentials: true,
            body: query
        });
    }

    public upfile(path: string, ready = null) {
        let headers = [];
        this.buildHeader(null).forEach((values, name) => {
            headers.push({ name: name, value: values[0] });
        });
        let uploader = new FileUploader({
            headers: headers,
            autoUpload: true,
            maxFileSize: 8000000,
            itemAlias: 'Filedata',
            url: Sites.baseapi + path
        });
        uploader.onSuccessItem = (item, body) => {
            let opt = new ResponseOptions({ body });
            let res = new Response(opt);
            if (typeof ready == 'function') {
                ready(item, this.parseResponse(res));
            }
        };
        return uploader;
    }

    public notice(text, duration = 0) {
        let opts = {
            message: text,
            duration: duration,
            showCloseButton: duration === 0 || duration > 6000,
            closeButtonText: '关闭'
        };
        let toast = this.toast.create(opts);
        toast.dismissAll();
        toast.present();
        return toast;
    }

    //////////////////////////////////////////////////////////////////////////////

    private request(args: any) {
        let req = new Request(args);
        return this.http.request(req).toPromise()
            .then(res => this.parseResponse(res))
            .catch(err => this.handleError(err));
    }

    private buildHeader(type: any) {
        let xmb = [];
        for (let k in Agent) {
            xmb.push(k + '/' + Agent[k]);
        }
        let header = {
            'X-Mobile': xmb.join(' ')
        };
        if (this.istoken) {
            header['X-Token'] = this.general.xtoken;
        }
        if (type == 'url') {
            header['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return new Headers(header);
    }

    private parseResponse(res: Response) {
        let body = res.json() || {};
        //获取系统消息
        this.message = body.Message || {};
        if (this.message.str) {
            if (this.message.key == 'redirect') {
                return Promise.reject(this.message);
            }
            this.notice(this.message.str, 3000);
        }
        //获取通用数据
        if (body.General) {
            this.general = body.General;
            this.cache.set('bridge/general', this.general);
        }
        //返回主体数据
        let content = body.Content || {};
        content.errkey = this.message.key;
        return content;
    }

    private handleError(err: any) {
        err = err || {};
        //重组错误信息
        if (typeof err == 'string') {
            err = { message: err };
        }
        if (err.key == 'redirect') {
            err.message = '接口重定向，请稍后再试';
        }
        if (err.name == 'SyntaxError') {
            err.message = '无法解析数据，请稍后再试';
        }
        if (err.status && !err.message) {
            err.message = `${err.status} - ${err.statusText}`;
        }
        err.message = err.message || '请求接口失败，请稍后再试';
        //返回错误信息
        this.notice(err.message, 9000);
        return Promise.reject(err);
    }

}
