import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSintomasComponent } from './listar-sintomas.component';

describe('ListarSintomasComponent', () => {
  let component: ListarSintomasComponent;
  let fixture: ComponentFixture<ListarSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
