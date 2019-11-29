import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilePickerModule } from 'projects/file-picker-v2/src/public_api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFilePickerComponent } from './demo-file-picker/demo-file-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFilePickerComponent
  ],
  imports: [
    BrowserModule,
    FilePickerModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
