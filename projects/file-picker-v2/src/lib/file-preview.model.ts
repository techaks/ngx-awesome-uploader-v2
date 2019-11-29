export interface FilePreviewModel {
  fileId?: string;
  file: File | Blob;
  fileName: string;
  fileUrl?: string;
}

export interface ImagePreviewModel {
  id?: string;
  fileUrl: string;
  fileName: string;
}
