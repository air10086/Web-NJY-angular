import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-content',
  templateUrl: './ex-content.component.html',
  styleUrls: ['./ex-content.component.css']
})
export class ExContentComponent implements OnInit {
  public exchanges: Array<Exchange>;

  constructor() { }

  ngOnInit() {
    this.exchanges = [
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
      new Exchange('http://www.jsnjy.net.cn/images/expert.jpg',
        '丁诗琴', '2018-05-13 23:48:18', '花草...',
        '[详情]', '点赞：1', '收藏：0', '评论：0', 'http://object.jsnjy.net.cn/OSS/20180513/82b3a3d9a044457fa511bc883f239f30.jpg'),
    ];
  }

}

export class Exchange {
  constructor(
    public headImg: string,
    public name: string,
    public date: string,
    public content: string,
    public detail: string,
    public dianzan: string,
    public collect: string,
    public comment:  string,
    public img: string,
  ) {

  }

}
