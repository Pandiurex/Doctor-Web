import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPadecimientosComponent } from './info-padecimientos.component';

describe('InfoPadecimientosComponent', () => {
  let component: InfoPadecimientosComponent;
  let fixture: ComponentFixture<InfoPadecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPadecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPadecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
