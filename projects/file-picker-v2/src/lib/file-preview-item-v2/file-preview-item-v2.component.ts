import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ImagePreviewModel } from "../file-preview.model";

@Component({
  selector: "file-preview-item-v2",
  templateUrl: "./file-preview-item-v2.component.html",
  styleUrls: ["./file-preview-item-v2.component.scss"]
})
export class FilePreviewItemV2Component implements OnInit {
  @Input() image: ImagePreviewModel;
  @Output() public imageClicked = new EventEmitter<string>();
  @Output() public removeFile = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onRemove(fileItem: ImagePreviewModel): void {
    this.removeFile.next(fileItem);
  }
}
