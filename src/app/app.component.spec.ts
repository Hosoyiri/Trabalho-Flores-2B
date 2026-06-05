import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  });

  it('deve criar a aplicação', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('deve possuir título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toBe('Tópicos em Desenvolvimento Front-End');
  });

  it('deve renderizar a navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });
});