import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarSintomasComponent } from './borrar-sintomas.component';

describe('BorrarSintomasComponent', () => {
  let component: BorrarSintomasComponent;
  let fixture: ComponentFixture<BorrarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
