import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {BigHomeComponent} from './big-home/big-home.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {VideoComponent} from './video/video.component';
import {ExchangeComponent} from './exchange/exchange.component';
import {AskComponent} from './ask/ask.component';
import {ZhiboComponent} from './zhibo/zhibo.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {CarouslComponent} from './carousl/carousl.component';
import {HeadlineComponent} from './headline/headline.component';
import {Video1Component} from './video1/video1.component';
import {NClassfiyComponent} from './n-classfiy/n-classfiy.component';
import {NContentComponent} from './n-content/n-content.component';
import {Ask1Component} from './ask1/ask1.component';
import {ExpertComponent} from './expert/expert.component';
import {VClassifyComponent} from './v-classify/v-classify.component';
import {ExContentComponent} from './ex-content/ex-content.component';
import {VContentComponent} from './v-content/v-content.component';
import {MineComponent} from './mine/mine.component';
import {MineSidebarComponent} from './mine-sidebar/mine-sidebar.component';
import {MineContentComponent} from './mine-content/mine-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AskComponent,
    ExchangeComponent,
    VideoComponent,
    ZhiboComponent,
    NavbarComponent,
    FooterComponent,
    CarouslComponent,
    HeadlineComponent,
    Video1Component,
    Ask1Component,
    ExpertComponent,
    VClassifyComponent,
    NClassfiyComponent,
    NContentComponent,
    ExContentComponent,
    VContentComponent,
    RegisterComponent,
    LoginComponent,
    BigHomeComponent,
    MineComponent,
    MineSidebarComponent,
    MineContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
