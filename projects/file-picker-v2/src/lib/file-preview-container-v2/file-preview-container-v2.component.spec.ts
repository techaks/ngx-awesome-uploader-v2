import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewContainerV2Component } from './file-preview-container-v2.component';

describe('FilePreviewContainerV2Component', () => {
  let component: FilePreviewContainerV2Component;
  let fixture: ComponentFixture<FilePreviewContainerV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePreviewContainerV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePreviewContainerV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
