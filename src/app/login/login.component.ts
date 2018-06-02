import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../mine/mine.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  public login_phone: string;
  public login_password: string;

  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit( ) {
    this.http.post('http://118.25.13.254:8080/njy/user/login',
      {'account':  this.login_phone,
        'password': this.login_password,
        'platform': 0,
        'deviceId': 'h5'
      }).subscribe(
      (val) => {
        if (val['code'] === 2) {
          sessionStorage.setItem( 'user', val ['data']['user']['userName']);
          alert(sessionStorage.setItem( 'user', val ['data']['user']['userName']));
          alert('登录成功');
          this.router.navigate(['./big-home']);
        } else {
          alert('登录失败');
          this.router.navigate(['/login']);
        }
      });
  }

}
