import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSintomasComponent } from './modificar-sintomas.component';

describe('ModificarSintomasComponent', () => {
  let component: ModificarSintomasComponent;
  let fixture: ComponentFixture<ModificarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
