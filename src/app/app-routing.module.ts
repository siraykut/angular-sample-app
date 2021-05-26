import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsDetailComponent} from './_components/news-detail/news-detail.component';
import {NewsListComponent} from './_components/news-list/news-list.component';
import {RegisterFormComponent} from './_components/register-form/register-form.component';

const routes: Routes = [
  {path: '',  redirectTo: '/NewsList', pathMatch: 'full'},
  {path: 'NewsList',  component: NewsListComponent},
  {path: 'News/:Id', component: NewsDetailComponent},
  {path: 'register-form', component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
