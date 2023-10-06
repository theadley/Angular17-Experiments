import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRouteInputsComponent } from './lazy-route-inputs.component';

describe('LazyRouteInputsComponent', () => {
  let component: LazyRouteInputsComponent;
  let fixture: ComponentFixture<LazyRouteInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LazyRouteInputsComponent]
    });
    fixture = TestBed.createComponent(LazyRouteInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
