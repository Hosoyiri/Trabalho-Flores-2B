import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/usuario.model';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(UsuarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar lista de usuários via GET', () => {
    const usuariosMock: Usuario[] = [
      {
        id: 1,
        name: 'João Silva',
        email: 'joao@email.com',
        phone: '9999-9999',
        website: 'joao.com'
      },
      {
        id: 2,
        name: 'Maria Souza',
        email: 'maria@email.com',
        phone: '8888-8888',
        website: 'maria.com'
      }
    ];

    service.getUsuarios().subscribe((usuarios) => {
      expect(usuarios.length).toBe(2);
      expect(usuarios[0].name).toBe('João Silva');
    });

    const req = httpMock.expectOne(apiUrl);

    expect(req.request.method).toBe('GET');

    req.flush(usuariosMock);
  });

  it('deve buscar um usuário por ID', () => {
    const usuarioMock: Usuario = {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '9999-9999',
      website: 'joao.com'
    };

    service.getUsuarioPorId(1).subscribe((usuario) => {
      expect(usuario.id).toBe(1);
      expect(usuario.name).toBe('João Silva');
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);

    expect(req.request.method).toBe('GET');

    req.flush(usuarioMock);
  });
});