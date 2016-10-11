import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    constructor(public http: Http) { }

    getByPage(url: string, page: number, pageSize: number) {
        var uri = url + '/' + page.toString() + '/' + pageSize.toString();

        return this.http.get(uri)
            .map(response => <Response>response);
    }

    getAll(url: string) {
        return this.http.get(url)
            .map(response => <Response>response);
    }

    getSingle(url: string, id: number) {
        return this.http.get(url + '/' + id.toString())
            .map(response => <Response>response);
    }

    post(url: string, data?: any, params?: any) {
        return this.http.post(url, data, params)
            .map(response => <any>(<Response>response));
    }

    put(url: string, data: any, params?: any) {
        return this.http.put(url, data)
            .map(response => <any>(<Response>response));
    }

    delete(url: string, id: number) {
        return this.http.delete(url + '/' + id.toString())
            .map(response => <any>(<Response>response))
    }
}