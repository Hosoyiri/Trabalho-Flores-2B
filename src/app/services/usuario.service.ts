import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
}