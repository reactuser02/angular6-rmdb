import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColGridComponent } from './four-col-grid.component';

describe('FourColGridComponent', () => {
  let component: FourColGridComponent;
  let fixture: ComponentFixture<FourColGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
