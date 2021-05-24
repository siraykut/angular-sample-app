import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsDetailComponent } from './_components/news-detail/news-detail.component';
import { HeaderComponent } from './_components/header/header.component';
import { CommentsComponent } from './_components/comments/comments.component';
import {FormsModule} from '@angular/forms';
import { NewsListComponent } from './_components/news-list/news-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    HeaderComponent,
    CommentsComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
