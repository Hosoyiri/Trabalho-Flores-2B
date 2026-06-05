import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  carregando = false;
  erro: string | null = null;
  termoBusca = '';
  usuarioSelecionado: Usuario | null = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.carregando = true;
    this.erro = null;

    this.usuarioService.getUsuarios().subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error(erro);
        this.erro = 'Não foi possível carregar os usuários da API.';
        this.carregando = false;
      }
    });
  }

  atualizarBusca(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.termoBusca = input.value;
  }

  get usuariosFiltrados(): Usuario[] {
    if (!this.termoBusca.trim()) {
      return this.usuarios;
    }

    const termo = this.termoBusca.toLowerCase();

    return this.usuarios.filter((usuario) =>
      usuario.name.toLowerCase().includes(termo) ||
      usuario.email.toLowerCase().includes(termo)
    );
  }

  selecionarUsuario(usuario: Usuario): void {
    if (this.usuarioSelecionado?.id === usuario.id) {
      this.usuarioSelecionado = null;
      return;
    }

    this.usuarioSelecionado = usuario;
  }

  getIniciais(nome: string): string {
    return nome
      .split(' ')
      .slice(0, 2)
      .map((parte) => parte.charAt(0))
      .join('')
      .toUpperCase();
  }

  getCorAvatar(id: number): string {
    const cores = [
      '#ef4444',
      '#2563eb',
      '#16a34a',
      '#9333ea',
      '#ea580c',
      '#0891b2',
      '#db2777',
      '#4f46e5'
    ];

    return cores[(id - 1) % cores.length];
  }
}