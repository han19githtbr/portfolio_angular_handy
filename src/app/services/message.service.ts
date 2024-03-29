import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //public API = 'http://localhost:8090';
  //public API = 'https://portfolio-angular-handy-b4cd6ff762d8.herokuapp.com';
  public API = 'https://portfolio-handy.onrender.com';
  //public LINK_FORMULARIO = 'https://portfolio-handy.netlify.app/formulario'
  public CONTROLLER = this.API + '/portfolio';

  constructor(private _http: HttpClient) { }

  sendMessage(body: any) {
    return this._http.post('https://portfolio-handy.netlify.app/formulario', body);
  }

  saveMessage(item: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this._http.post(this.CONTROLLER + '/saveMessage', item, { headers: headers, observe: 'response' });
  }

  savePicture(item: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this._http.post(this.CONTROLLER + '/savePicture', item, { headers: headers, observe: 'response' });
  }

  downloadCurriculo(idioma: string, cacheBuster: string): Observable<any> {
    const headers = new HttpHeaders().set('Cache-Buster', cacheBuster).set('Accept', 'application/pdf');

    return this._http.get(this.CONTROLLER + '/downloadCurriculo/' + idioma, { headers, responseType: 'arraybuffer' as 'json' });
  }

  downloadCertificado(idioma: string, cacheBuster: string): Observable<any> {
    const headers = new HttpHeaders().set('Cache-Buster', cacheBuster).set('Accept', 'application/pdf');

    return this._http.get(this.CONTROLLER + '/downloadCertificado/' + idioma, { headers, responseType: 'arraybuffer' as 'json' });
  }

  pegarFoto(nome: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this._http.get(this.CONTROLLER + '/pegarFoto/' + nome, { headers: headers, observe: 'response' });
  }
}
