import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelabelnoteComponent } from './updatelabelnote.component';

describe('UpdatelabelnoteComponent', () => {
  let component: UpdatelabelnoteComponent;
  let fixture: ComponentFixture<UpdatelabelnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelabelnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelabelnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
