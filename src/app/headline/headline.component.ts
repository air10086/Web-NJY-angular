import {Component, OnInit, ɵisDefaultChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  public headlineList: Array<Headline>;

  constructor() { }

  ngOnInit() {
    this.headlineList = [
      new Headline(1, '【预测】2018年新小麦上市行情走势',
        '在经济运行稳中向好，农业供给侧结构性改革深入推进的背景下，小麦市场行情将如何变化？4月20日，郑州...',
        'http://object.jsnjy.net.cn/OSS/20180511/3424566c8ca74577b707378dbf5bb2f4.png', '1255次', '2011-09-11 00:59:52'),
      new Headline(2, '【预测】2018年新小麦上市行情走势',
        '在经济运行稳中向好，农业供给侧结构性改革深入推进的背景下，小麦市场行情将如何变化？4月20日，郑州...',
        'http://object.jsnjy.net.cn/OSS/20180511/3424566c8ca74577b707378dbf5bb2f4.png', '1255次', '2011-09-11'),
      new Headline(3, '【预测】2018年新小麦上市行情走势',
        '在经济运行稳中向好，农业供给侧结构性改革深入推进的背景下，小麦市场行情将如何变化？4月20日，郑州...',
        'http://object.jsnjy.net.cn/OSS/20180511/3424566c8ca74577b707378dbf5bb2f4.png', '1255次', '2011-09-11'),
      new Headline(4, '【预测】2018年新小麦上市行情走势',
        '在经济运行稳中向好，农业供给侧结构性改革深入推进的背景下，小麦市场行情将如何变化？4月20日，郑州...',
        'http://object.jsnjy.net.cn/OSS/20180511/3424566c8ca74577b707378dbf5bb2f4.png', '1255次', '2011-09-11'),
    ];
  }
}

export class Headline {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public image: string,
    public readNum: string,
    public dataTime: string
  ) {

  }
}
