import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsDetailComponent } from './_components/news-detail/news-detail.component';
import { HeaderComponent } from './_components/header/header.component';
import { CommentsComponent } from './_components/comments/comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewsListComponent } from './_components/news-list/news-list.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './_components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    HeaderComponent,
    CommentsComponent,
    NewsListComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
