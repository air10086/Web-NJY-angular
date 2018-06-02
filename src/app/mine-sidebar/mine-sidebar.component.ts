import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine-sidebar',
  templateUrl: './mine-sidebar.component.html',
  styleUrls: ['./mine-sidebar.component.css']
})
export class MineSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('#file-fr').fileinput({
    //   theme: 'fa',
    //   language: 'fr',
    //   uploadUrl: '#',
    //   allowedFileExtensions: ['jpg', 'png', 'gif']
    // });
  }
}
