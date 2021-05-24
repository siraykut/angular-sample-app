import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsDetailComponent} from './_components/news-detail/news-detail.component';
import {NewsListComponent} from './_components/news-list/news-list.component';

const routes: Routes = [
  {path: '', component: NewsListComponent, pathMatch: 'full'},
  {path: 'News/:Id', component: NewsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
