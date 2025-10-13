import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownValidationComponent } from './dropdown-validation-component';

describe('DropdownValidationComponent', () => {
  let component: DropdownValidationComponent;
  let fixture: ComponentFixture<DropdownValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
