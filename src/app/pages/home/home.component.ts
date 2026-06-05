import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Tópicos em Desenvolvimento de Front-End';
  subtitulo = 'Angular, Vue, React, HTTP e Testes';

  topicos = [
    {
      icone: '🅰️',
      titulo: 'Angular',
      descricao: 'Framework completo mantido pelo Google, baseado em TypeScript e muito usado em aplicações corporativas.',
      cor: '#dd0031'
    },
    {
      icone: '💚',
      titulo: 'Vue.js',
      descricao: 'Framework progressivo conhecido pela facilidade de aprendizado e pela simplicidade na criação de interfaces.',
      cor: '#42b883'
    },
    {
      icone: '⚛️',
      titulo: 'React',
      descricao: 'Biblioteca JavaScript mantida pela Meta, muito popular para criação de interfaces baseadas em componentes.',
      cor: '#2563eb'
    },
    {
      icone: '🧩',
      titulo: 'Componentes',
      descricao: 'No Angular, componentes são blocos reutilizáveis formados por HTML, CSS e TypeScript.',
      cor: '#7c3aed'
    },
    {
      icone: '🌐',
      titulo: 'HTTP Client',
      descricao: 'Recurso do Angular utilizado para consumir APIs externas por meio de requisições HTTP.',
      cor: '#ea580c'
    },
    {
      icone: '🧪',
      titulo: 'Karma e Jasmine',
      descricao: 'Ferramentas usadas no Angular para executar e escrever testes unitários.',
      cor: '#0891b2'
    }
  ];
}