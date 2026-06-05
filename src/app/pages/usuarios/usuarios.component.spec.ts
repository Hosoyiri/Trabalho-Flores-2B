import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;
  let usuarioServiceSpy: jasmine.SpyObj<UsuarioService>;

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

  beforeEach(async () => {
    usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', [
      'getUsuarios',
      'getUsuarioPorId'
    ]);

    usuarioServiceSpy.getUsuarios.and.returnValue(of(usuariosMock));

    await TestBed.configureTestingModule({
      imports: [UsuariosComponent],
      providers: [
        {
          provide: UsuarioService,
          useValue: usuarioServiceSpy
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar usuários ao iniciar', () => {
    expect(usuarioServiceSpy.getUsuarios).toHaveBeenCalled();
    expect(component.usuarios.length).toBe(2);
  });

  it('deve filtrar usuários pelo nome', () => {
    component.termoBusca = 'maria';

    expect(component.usuariosFiltrados.length).toBe(1);
    expect(component.usuariosFiltrados[0].name).toBe('Maria Souza');
  });

  it('deve selecionar um usuário', () => {
    component.selecionarUsuario(usuariosMock[0]);

    expect(component.usuarioSelecionado?.id).toBe(1);
  });
});