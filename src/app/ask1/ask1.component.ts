import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask1',
  templateUrl: './ask1.component.html',
  styleUrls: ['./ask1.component.css']
})
export class Ask1Component implements OnInit {
  public questions: Array<Question>;
  constructor() { }

  ngOnInit() {
    this.questions = [
      new Question(1, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所', '2018-05-11 17:01:53', '20'),
      new Question(2, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所', '2018-05-11 17:01:53', '20'),
      new Question(3, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所', '2018-05-11 17:01:53', '20'),
      new Question(4, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所', '2018-05-11 17:01:53', '20'),
      new Question(5, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所', '2018-05-11 17:01:53', '20'),
      new Question(5, 'http://object.jsnjy.net.cn/OSS/20161124/20161124213335613.jpg',
        '陈寿祥', '农技推广人员', '淮安市 金湖县 前锋镇', '草鸡蛋什么价格啊？',
        '江苏省淮安市金湖县人民北路靠近吕良派出所' , '2018-05-11 17:01:53', '20'),
    ];
  }

}

export class Question {
  constructor(
    public id: number,
    public image_head: string,
    public name: string,
    public identity: string,
    public homeland: string,
    public question_title: string,
    public loaction: string,
    public reportTime:  string,
    public readNum: string
  ) {

  }

}


