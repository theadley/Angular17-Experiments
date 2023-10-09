import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputsComponent } from './child-inputs.component';

describe('ChildInputsComponent', () => {
  let component: ChildInputsComponent;
  let fixture: ComponentFixture<ChildInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildInputsComponent]
    });
    fixture = TestBed.createComponent(ChildInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
