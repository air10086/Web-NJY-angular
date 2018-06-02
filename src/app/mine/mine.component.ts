import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  user: User;


  constructor( ) {
  }
  ngOnInit() {
    // $('#editButton').click(function () {
    //   $('container').find('#account').attr('disabled', 'false');
    // });
  }
}

export class User {
  constructor(
    public user_id: string,
    public user_score: string,
    public userName: string,
    public userAvatar: string,
    public userCompany: string,
    public userMail: string,
    public userEduction: string,
    public addressString: null,
    public identityName: string
  ) {

  }
}
