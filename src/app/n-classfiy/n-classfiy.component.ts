import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n-classfiy',
  templateUrl: './n-classfiy.component.html',
  styleUrls: ['./n-classfiy.component.css']
})
export class NClassfiyComponent implements OnInit {
  public classflys: Array<string>;

  constructor() { }

  ngOnInit() {
    this.classflys = [
'首页头条',  '应时农事',  '农业科技',  '农业政策',  '市场聚焦',  '价格行情',  '创业致富',  '科教动态',  '首页动态', '农业气象', '主推技术库', '畜禽品种库', '品牌农资动态', '专业合作', '乡村旅游', '生活服务',
    ];
  }

}
