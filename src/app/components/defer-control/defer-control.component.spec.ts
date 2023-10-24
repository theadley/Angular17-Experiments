import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferControlComponent } from './defer-control.component';

describe('DeferControlComponent', () => {
  let component: DeferControlComponent;
  let fixture: ComponentFixture<DeferControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
