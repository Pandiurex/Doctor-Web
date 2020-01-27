import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryPicComponent } from './injury-pic.component';

describe('InjuryPicComponent', () => {
  let component: InjuryPicComponent;
  let fixture: ComponentFixture<InjuryPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuryPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuryPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
