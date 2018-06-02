///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user_name: any;

  constructor() {
    this.user_name = JSON.stringify(sessionStorage.getItem('user'));
    console.log(this.user_name);
  }

  ngOnInit() {
      // $('#file-fr').fileinput({
      //   theme: 'fa',
      //   language: 'fr',
      //   uploadUrl: '#',
      //   allowedFileExtensions: ['jpg', 'png', 'gif']
      // });
      $('.menu-tab li ').on('click', function() {
        $('.menu-tab li  ').css('background-color', 'white');
        $(this).css('background-color', 'rgb(0, 158, 1)');
      });

      $('.menu-tab>li>a').on('click', function () {
        $('.menu-tab>li>a').css('color', '#818996');
        $(this).css('color', 'white');

      });
  }

}
