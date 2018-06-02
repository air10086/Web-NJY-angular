import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video1',
  templateUrl: './video1.component.html',
  styleUrls: ['./video1.component.css']
})
export class Video1Component implements OnInit {
  public videoPlayer_home: Array<VideoPlayer>;


  constructor() { }

  ngOnInit() {
    this.videoPlayer_home = [
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      new VideoPlayer('http://object.jsnjy.net.cn/OSS/20180511/35141a76a94449e5a99de4f5c6c9aa55.jpg',
        'http://object.jsnjy.net.cn/OSS/20180510/510.mp4', '特色大豆新品种及绿色增产增效产业化技术',
        '458次播放'),
      ];
  }

}

export class VideoPlayer {
  constructor(
    public video_pic: string,
    public video_palyer: string,
    public video_title: string,
    public video_number: string
  ) {

  }

}
