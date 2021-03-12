import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../modelos/noticia';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/noticias/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.url);
  }

  getPorId(id: number): Observable<Noticia> {
    return this.http.get<Noticia>(this.url + id);
  }

  post(Noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.url, Noticia, this.httpOptions);
  }

  put(Noticia: Noticia): Observable<Noticia> {
    return this.http.put<Noticia>(this.url + Noticia.id, Noticia, this.httpOptions);
  }

  delete(id: number): Observable<Noticia> {
    return this.http.delete<Noticia>(this.url + id, this.httpOptions);
  }
}
