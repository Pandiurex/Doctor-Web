import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPadecimientosComponent } from './agregar-padecimientos.component';

describe('AgregarPadecimientosComponent', () => {
  let component: AgregarPadecimientosComponent;
  let fixture: ComponentFixture<AgregarPadecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPadecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPadecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
