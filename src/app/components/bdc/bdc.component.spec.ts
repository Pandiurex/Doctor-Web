import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDCComponent } from './bdc.component';

describe('BDCComponent', () => {
  let component: BDCComponent;
  let fixture: ComponentFixture<BDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
