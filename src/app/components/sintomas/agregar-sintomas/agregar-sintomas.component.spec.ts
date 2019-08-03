import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSintomasComponent } from './agregar-sintomas.component';

describe('AgregarSintomasComponent', () => {
  let component: AgregarSintomasComponent;
  let fixture: ComponentFixture<AgregarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
