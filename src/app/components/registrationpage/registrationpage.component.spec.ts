import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './registrationpage.component';

describe('RegistrationpageComponent', () => {
  let component: RegisterComponent ;
  let fixture: ComponentFixture<RegisterComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
