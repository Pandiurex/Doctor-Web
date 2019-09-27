import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPadecimientosComponent } from './listar-padecimientos.component';

describe('ListarPadecimientosComponent', () => {
  let component: ListarPadecimientosComponent;
  let fixture: ComponentFixture<ListarPadecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPadecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPadecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
