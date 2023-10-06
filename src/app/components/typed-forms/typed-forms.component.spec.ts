import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedFormsComponent } from './typed-forms.component';

describe('TypedFormsComponent', () => {
  let component: TypedFormsComponent;
  let fixture: ComponentFixture<TypedFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TypedFormsComponent]
    });
    fixture = TestBed.createComponent(TypedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
