import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-classify',
  templateUrl: './v-classify.component.html',
  styleUrls: ['./v-classify.component.css']
})
export class VClassifyComponent implements OnInit {
  public classify: Array <string>;

  constructor() { }

  ngOnInit() {
    this.classify = ['推荐', '种植', '园艺', '畜禽', '水产', '其他', '新闻', '乡村'];
  }

}
