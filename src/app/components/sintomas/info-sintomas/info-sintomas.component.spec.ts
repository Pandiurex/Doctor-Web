import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSintomasComponent } from './info-sintomas.component';

describe('InfoSintomasComponent', () => {
  let component: InfoSintomasComponent;
  let fixture: ComponentFixture<InfoSintomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSintomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSintomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
