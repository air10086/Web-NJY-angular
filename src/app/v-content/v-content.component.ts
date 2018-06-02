import { Component, OnInit } from '@angular/core';
import {VideoPlayer} from '../video1/video1.component';

@Component({
  selector: 'app-v-content',
  templateUrl: './v-content.component.html',
  styleUrls: ['./v-content.component.css']
})
export class VContentComponent implements OnInit {
  public videoPlay_V_vontent: Array<VideoPlayer>;

  constructor() { }

  ngOnInit() {
    this.videoPlay_V_vontent = [
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
    ];
  }

}
