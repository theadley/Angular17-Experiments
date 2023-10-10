import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDialogOverviewExampleComponent } from './cdk-dialog-overview-example.component';

describe('CdkDialogOverviewExampleComponent', () => {
  let component: CdkDialogOverviewExampleComponent;
  let fixture: ComponentFixture<CdkDialogOverviewExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CdkDialogOverviewExampleComponent]
    });
    fixture = TestBed.createComponent(CdkDialogOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
