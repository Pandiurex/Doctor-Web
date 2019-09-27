import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPadecimientosComponent } from './modificar-padecimientos.component';

describe('ModificarPadecimientosComponent', () => {
  let component: ModificarPadecimientosComponent;
  let fixture: ComponentFixture<ModificarPadecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPadecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPadecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
