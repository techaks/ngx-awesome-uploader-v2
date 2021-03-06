import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpRequest
} from "@angular/common/http";
import { FilePickerAdapter } from "projects/file-picker-v2/src/lib/file-picker.adapter";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { FilePreviewModel } from "../../../projects/file-picker-v2/src/lib/file-preview.model";

export class DemoFilePickerAdapter extends FilePickerAdapter {
  constructor(private http: HttpClient) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    const form = new FormData();
    form.append("file", fileItem.file);
    const api = "http://localhost:3000/api/upload";
    const req = new HttpRequest("POST", api, form, { reportProgress: true });
    return this.http.request(req).pipe(
      map((res: HttpEvent<any>) => {
        if (res.type === HttpEventType.Response) {
          return res.body;
        } else if (res.type === HttpEventType.UploadProgress) {
          // Compute and show the % done:
          const UploadProgress = +Math.round((100 * res.loaded) / res.total);
          return UploadProgress;
        }
      })
    );
  }

  public removeFile(fileItem: FilePreviewModel): Observable<any> {
    console.log(fileItem.fileId);
    const removeApi = "https://file-remove-demo.free.beeceptor.com";
    return this.http.post(removeApi, { id: fileItem.fileId });
  }
}
