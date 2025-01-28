import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaDepartamentosComponent } from './ventana-departamentos.component';

describe('VentanaDepartamentosComponent', () => {
  let component: VentanaDepartamentosComponent;
  let fixture: ComponentFixture<VentanaDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
