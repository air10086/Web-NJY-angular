import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BigHomeComponent} from './big-home/big-home.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {AskComponent} from './ask/ask.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {VideoComponent} from './video/video.component';
import {ZhiboComponent} from './zhibo/zhibo.component';
import {MineComponent} from './mine/mine.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  // 重定向路由
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'big-home', component: BigHomeComponent , children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'news', component: NewsComponent},
      {path: 'ask', component: AskComponent},
      {path: 'exchange', component: ExchangeComponent},
      {path: 'video', component: VideoComponent},
      {path: 'zhibo', component: ZhiboComponent},
      {path: 'mine', component: MineComponent}
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
