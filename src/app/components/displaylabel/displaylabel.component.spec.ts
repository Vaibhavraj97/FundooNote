import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylabelComponent } from './displaylabel.component';

describe('DisplaylabelComponent', () => {
  let component: DisplaylabelComponent;
  let fixture: ComponentFixture<DisplaylabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaylabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaylabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
