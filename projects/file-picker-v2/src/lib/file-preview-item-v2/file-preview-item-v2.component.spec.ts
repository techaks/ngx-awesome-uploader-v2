import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewItemV2Component } from './file-preview-item-v2.component';

describe('FilePreviewItemV2Component', () => {
  let component: FilePreviewItemV2Component;
  let fixture: ComponentFixture<FilePreviewItemV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePreviewItemV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePreviewItemV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
