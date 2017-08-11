import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogComponent } from './app-dialog.component';

describe('AppDialogComponent', () => {
  let component: AppDialogComponent;
  let fixture: ComponentFixture<AppDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
