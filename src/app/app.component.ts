import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  fileToUpload: any = null;

  constructor() {}

  ngOnInit() {}

  handleFileInput(event: any) {
    const files = event.target.files;
    this.fileToUpload = files.item(0);
  }
}
