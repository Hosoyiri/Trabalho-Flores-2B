import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve abrir e fechar o menu', () => {
    expect(component.menuAberto).toBeFalse();

    component.toggleMenu();
    expect(component.menuAberto).toBeTrue();

    component.fecharMenu();
    expect(component.menuAberto).toBeFalse();
  });
});