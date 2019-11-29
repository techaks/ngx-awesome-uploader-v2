import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FilePreviewModel } from "../../file-preview.model";

@Component({
  selector: "preview-lightbox",
  templateUrl: "./preview-lightbox.component.html",
  styleUrls: ["./preview-lightbox.component.scss"]
})
export class PreviewLightboxComponent implements OnInit {
  @Input() file: FilePreviewModel;
  @Input() fileUrl: FilePreviewModel;
  @Output() close = new EventEmitter<void>();
  loaded: boolean;
  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (typeof this.file === "object") {
      this.getSafeUrl(this.file.file);
    } else {
      this.safeUrl = this.fileUrl;
    }
  }
  getSafeUrl(file: File | Blob): void {
    const url = window.URL.createObjectURL(file);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onClose(event): void {
    this.close.next();
  }
}
