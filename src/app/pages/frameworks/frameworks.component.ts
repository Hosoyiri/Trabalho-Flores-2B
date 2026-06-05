import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Framework {
  nome: string;
  icone: string;
  cor: string;
  criador: string;
  lancamento: string;
  linguagem: string;
  descricao: string;
  pontosFortes: string[];
  pontosFracos: string[];
  casosUso: string[];
}

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent {
  frameworkAtivo = 0;

  frameworks: Framework[] = [
    {
      nome: 'Angular',
      icone: '🅰️',
      cor: '#dd0031',
      criador: 'Google',
      lancamento: '2016',
      linguagem: 'TypeScript',
      descricao:
        'Angular é um framework completo para desenvolvimento de aplicações web. Ele oferece uma estrutura robusta, com componentes, rotas, injeção de dependência, formulários, HTTP Client e ferramentas de teste integradas.',
      pontosFortes: [
        'Framework completo',
        'Uso nativo de TypeScript',
        'Boa organização para projetos grandes',
        'CLI poderosa',
        'Injeção de dependência',
        'Ótimo para aplicações corporativas'
      ],
      pontosFracos: [
        'Curva de aprendizado maior',
        'Mais verboso que Vue e React',
        'Pode ser excessivo para projetos pequenos'
      ],
      casosUso: [
        'Sistemas empresariais',
        'Painéis administrativos',
        'Aplicações bancárias',
        'Projetos grandes com equipes'
      ]
    },
    {
      nome: 'Vue.js',
      icone: '💚',
      cor: '#42b883',
      criador: 'Evan You',
      lancamento: '2014',
      linguagem: 'JavaScript / TypeScript',
      descricao:
        'Vue.js é um framework progressivo para criação de interfaces. Ele é conhecido pela simplicidade, pela documentação clara e pela facilidade de integração com projetos existentes.',
      pontosFortes: [
        'Curva de aprendizado suave',
        'Código simples e legível',
        'Boa documentação',
        'Flexível',
        'Leve e performático'
      ],
      pontosFracos: [
        'Menor presença em grandes empresas',
        'Ecossistema menor que React',
        'Menos vagas em algumas regiões'
      ],
      casosUso: [
        'Projetos pequenos e médios',
        'Prototipagem rápida',
        'Sites institucionais',
        'Sistemas com menor complexidade'
      ]
    },
    {
      nome: 'React',
      icone: '⚛️',
      cor: '#2563eb',
      criador: 'Meta',
      lancamento: '2013',
      linguagem: 'JavaScript / JSX',
      descricao:
        'React é uma biblioteca JavaScript focada na criação de interfaces de usuário. Apesar de não ser um framework completo, possui um ecossistema muito grande e é amplamente utilizado no mercado.',
      pontosFortes: [
        'Grande comunidade',
        'Muitas vagas no mercado',
        'Componentização forte',
        'Ecossistema amplo',
        'React Native para mobile'
      ],
      pontosFracos: [
        'Não é framework completo',
        'Depende de bibliotecas externas',
        'JSX pode ser estranho no início'
      ],
      casosUso: [
        'Startups',
        'Redes sociais',
        'Aplicações web modernas',
        'Projetos com versão mobile'
      ]
    }
  ];

  conceitosAngular = [
    {
      titulo: 'Componentes',
      icone: '🧩',
      descricao:
        'Componentes são os blocos principais de uma aplicação Angular. Cada componente possui uma classe TypeScript, um template HTML e um arquivo de estilos CSS.',
      codigo: `@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent {
  titulo = 'Meu componente';
}`
    },
    {
      titulo: 'Data Binding',
      icone: '🔗',
      descricao:
        'Data Binding é a ligação entre a lógica TypeScript e o template HTML. Permite exibir dados, alterar propriedades e reagir a eventos.',
      codigo: `<!-- Interpolação -->
<h1>{{ titulo }}</h1>

<!-- Property Binding -->
<img [src]="imagem">

<!-- Event Binding -->
<button (click)="salvar()">Salvar</button>`
    },
    {
      titulo: 'HTTP Client',
      icone: '🌐',
      descricao:
        'O HttpClient permite consumir APIs usando métodos como GET, POST, PUT e DELETE. Ele retorna Observables do RxJS.',
      codigo: `getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(
    'https://api.exemplo.com/usuarios'
  );
}`
    },
    {
      titulo: 'Rotas',
      icone: '🛣️',
      descricao:
        'O Angular Router permite criar navegação entre páginas sem recarregar o navegador, formando uma Single Page Application.',
      codigo: `export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent }
];`
    },
    {
      titulo: 'Injeção de Dependência',
      icone: '⚙️',
      descricao:
        'É o mecanismo usado pelo Angular para fornecer instâncias de classes, como services, automaticamente aos componentes.',
      codigo: `constructor(
  private usuarioService: UsuarioService
) {}`
    },
    {
      titulo: 'Karma e Jasmine',
      icone: '🧪',
      descricao:
        'Karma executa os testes no navegador, enquanto Jasmine fornece a sintaxe para escrever testes com describe, it e expect.',
      codigo: `describe('Componente', () => {
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});`
    }
  ];

  selecionarFramework(indice: number): void {
    this.frameworkAtivo = indice;
  }
}