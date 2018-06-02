import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {
  public expertItems: Array<ExpertItem>;

  constructor() { }

  ngOnInit() {
    this.expertItems = [
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
      new ExpertItem( '郭文善', 'http://object.jsnjy.net.cn/OSS/20161101/20161101195635233.jpg'),
    ];
  }

}
export class ExpertItem {
  constructor(
    public name: string,
    public img: string,
  ) {
  }
}
