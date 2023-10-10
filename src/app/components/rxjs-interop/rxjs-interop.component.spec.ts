import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInteropComponent } from './rxjs-interop.component';

describe('RxjsInteropComponent', () => {
  let component: RxjsInteropComponent;
  let fixture: ComponentFixture<RxjsInteropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RxjsInteropComponent]
    });
    fixture = TestBed.createComponent(RxjsInteropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
