import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashlistComponent } from './trashlist.component';

describe('TrashlistComponent', () => {
  let component: TrashlistComponent;
  let fixture: ComponentFixture<TrashlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
