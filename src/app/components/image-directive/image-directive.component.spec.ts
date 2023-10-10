import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDirectiveComponent } from './image-directive.component';

describe('ImageDirectiveComponent', () => {
  let component: ImageDirectiveComponent;
  let fixture: ComponentFixture<ImageDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageDirectiveComponent]
    });
    fixture = TestBed.createComponent(ImageDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
