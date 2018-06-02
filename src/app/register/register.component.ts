import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public register_phone: string;

  constructor( private http1: HttpClient, private router1: Router) { }

  ngOnInit() {
    const regUsername = /^[a-zA-Z_][a-zA-Z0-9_]{4,19}$/;
    const regPasswordAlpha = /[a-zA-Z]/;
    const regPasswordNum = /[0-9]/;
    const regPasswordSpecial = /[~!@#%&=;':",./<>_\}\]\-\$\(\)\*\+\.\[\?\\\^\{\|]/;
    let check = [false, false, false, false];
    // 匹配失败
    function fail(Obj, counter, msg) {
      Obj.parent().parent().removeClass('has-success').addClass('has-error');
      $('.glyphicon-remove').eq(counter).show();
      $('.glyphicon-ok').eq(counter).hide();
      $('.tips').eq(counter).text(msg).show();
      check[counter] = false;
    }

    // 匹配成功
    function success(Obj, counter) {
      Obj.parent().parent().removeClass('has-error').addClass('has-success');
      $('.tips').eq(counter).hide();
      $('.glyphicon-ok').eq(counter).show();
      $('.glyphicon-remove').eq(counter).hide();
      check[counter] = true;
    }

    // 手机号码
    const regPhoneNum = /^[0-9]{11}$/;
    $('.container').find('input').eq(0).change(function() {
      if (regPhoneNum.test( $(this).val().toString()) ? 1 : 0) {
        success($(this), 0);
      } else {
        fail($(this), 0, '手机号码只能为11位数字');
      }
    });

    // 密码匹配
// 匹配字母、数字、特殊字符至少两种的函数
    let password ;
    function atLeastTwo( password1 ) {
      const a = regPasswordSpecial.test(password1) ? 1 : 0;
      const b = regPasswordAlpha.test(password1) ? 1 : 0;
      const c = regPasswordNum.test(password1) ? 1 : 0;
      return a + b + c;

    }
    $('.container').find('input').eq(2).change(function() {

      password = $(this).val().valueOf();

      if ($(this).val().valueOf() < 8) {
        fail($(this), 2, '密码太短，不能少于8个字符');
      } else {


        if (atLeastTwo($(this).val()) < 2) {
          fail($(this), 2, '密码中至少包含字母、数字、特殊字符的两种');
        } else {
          success($(this), 2);
        }
      }
    });
// 再次输入密码校验
    $('.container').find('input').eq(3).change(function() {
      if ($(this).val().valueOf() === password) {
        success($(this), 3);
      } else {

        fail($(this), 3, '两次输入的密码不一致');
      }

    });

    // 短信验证
    const regMsg = /111111/;
    $('.container').find('input').eq(1).change(function() {
      if (check[0]) {
        if (regMsg.test($(this).val().toString()) ? 1 : 0) {
          success($(this), 1);
        } else {
          fail($(this), 1, '短信验证码错误');
        }
      } else {
        $('.container').find('input').eq(0).parent().parent().removeClass('has-success').addClass('has-error');
      }

    });

    // 短信提交到后台并更新短信验证按钮
    $('#loadingButton').click(function() {
      if (check[0]) {
        $(this).removeClass('btn-primary').addClass('disabled');
        $(this).html('<span class="red">30</span> 秒后重新获取');
        // sendSMS();
        secondCounter();
      } else {
        $('.container').find('input').eq(0).parent().parent().removeClass('has-success').addClass('has-error');
      }

    });
    function secondCounter() {
      const secondObj = $('#loadingButton').find('span');
      let secondObjVal = Number(secondObj.text());
      const secondTimer = setTimeout(function() {
        secondObjVal--;
        secondObj.text(secondObjVal);
        secondCounter();
      }, 1000);
      if (secondObjVal  === 0) {
        clearTimeout(secondTimer);
        $('#loadingButton').text('重新获取校验码');
        $('#loadingButton').removeClass('disabled').addClass('btn-primary');
      }
    }


    // 提交验证
    $('#submit').click(function(e) {
      if (!check.every(function(value) {
        return value === true;
      })) {
        e.preventDefault();
        check.forEach(function (element, number) {
          if (!element) {
            $('.container').find('input').eq(number).parent().parent().removeClass('has-success').addClass('has-error');
          }
        });
      }
    });

    // 重置
    $('#reset').click(function() {
      $('input').slice(0, 6).parent().parent().removeClass('has-error has-success');
      $('.tips').hide();
      $('.glyphicon-ok').hide();
      $('.glyphicon-remove').hide();
      check = [false, false, false, false, false, ];
    });
  }


  // 发送验证码
  onSend() {
    this.http1.post('http://118.25.13.254:8080/njy/user/send-code',
      {'mobile':  this.register_phone,
        'register': true
      }).subscribe(
      (val) => {
        if (val['code'] === 9) {
          alert(val['msg']);
        } else if (val['code'] === 14) {
          alert(val['msg']);
        } else if (val['code'] === 8) {
          alert(val['msg']);
        } else {
          alert('失败 30秒后重试');
        }
      });

  }
  // changeStyle() {
  //   const msgCode = $('#idcode-btn').val();
  //   this.http1.post(
  //     'http://118.25.13.254:8080/njy/user/verify',
  //     { 'moblie': this.register_phone,
  //               'verifyCode': msgCode
  //             }).subscribe(
  //     (val) => {
  //       if (val['code'] === 11) {
  //
  //       } else {
  //         alert('失败');
  //       }
  //     }
  //   );
  //
  // }

}
