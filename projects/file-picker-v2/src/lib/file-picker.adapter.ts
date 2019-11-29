import { Observable } from "rxjs";
import { FilePreviewModel } from "./file-preview.model";

export abstract class FilePickerAdapter {
  public abstract uploadFile(
    fileItem: FilePreviewModel
  ): Observable<number | string | any>;
  public abstract removeFile(fileItem: FilePreviewModel): Observable<any>;
}
