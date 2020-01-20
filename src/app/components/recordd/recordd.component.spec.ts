import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorddComponent } from './recordd.component';

describe('RecorddComponent', () => {
  let component: RecorddComponent;
  let fixture: ComponentFixture<RecorddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
