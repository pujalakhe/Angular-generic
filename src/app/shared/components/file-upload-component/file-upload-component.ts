import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload-component',
  imports: [CommonModule],
  templateUrl: './file-upload-component.html',
  styleUrl: './file-upload-component.scss',
})
export class FileUploadComponent {
  uploadedFiles: string[] = [];
  fileUrl: string = 'http://storeapi.gerasim.in/customer/';
  constructor(private httpClient: HttpClient) {}
  uploadFile(files: any) {
    const file = files[0];
    if (file.type === 'image/png' && file.size <= 3145728) {
      const formOb = new FormData();
      formOb.append('file', file);
      console.log(formOb);
      this.httpClient
        .post('http://storeapi.gerasim.in/api/Customer/Upload', formOb)
        .subscribe((res: any) => {
          this.uploadedFiles.push(res);
        });
      confirm('File uploaded successfully');
    } else {
      if (file.size > 3145728) {
        alert('File size exceeds 3Mb size limit');
      } else {
        alert('only png files are allowed');
      }
    }
  }
  // 3MB=3145728 Bytes
}
