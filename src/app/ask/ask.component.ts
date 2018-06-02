import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  public type: Array<string>;


  constructor() { }

  ngOnInit() {
    this.type = [ '粮经', '园艺', '畜禽' , '水产' , '农机', '其他'];

  }

}
