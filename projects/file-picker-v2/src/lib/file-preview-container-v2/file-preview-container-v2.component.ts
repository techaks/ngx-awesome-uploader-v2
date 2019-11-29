import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef
} from "@angular/core";
import { FilePickerAdapter } from "../file-picker.adapter";
import { UploaderCaptions } from "../uploader-captions";

@Component({
  selector: "file-preview-container-v2",
  templateUrl: "./file-preview-container-v2.component.html",
  styleUrls: ["./file-preview-container-v2.component.scss"]
})
export class FilePreviewContainerV2Component implements OnInit {
  @Input() previewFiles: [] = [];
  @Input() itemTemplate: TemplateRef<any>;
  @Output() public removeFile = new EventEmitter();
  @Output() public uploadSuccess = new EventEmitter();
  lightboxFile: string;
  @Input() adapter: FilePickerAdapter;
  @Input() captions: UploaderCaptions;
  constructor() {}

  ngOnInit() {}

  openLightbox(fileUrl: string) {
    this.lightboxFile = fileUrl;
  }
  closeLightbox() {
    this.lightboxFile = undefined;
  }
}
