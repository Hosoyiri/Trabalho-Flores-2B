import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksComponent } from './frameworks.component';

describe('FrameworksComponent', () => {
  let component: FrameworksComponent;
  let fixture: ComponentFixture<FrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve possuir 3 frameworks cadastrados', () => {
    expect(component.frameworks.length).toBe(3);
  });

  it('deve alterar o framework ativo', () => {
    component.selecionarFramework(2);

    expect(component.frameworkAtivo).toBe(2);
  });
});