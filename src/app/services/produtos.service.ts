import { IProduto } from './../components/model/IProduto.model';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost3000/produtos';

  constructor(private http: HttpClient) { }
  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL);

  }
}
