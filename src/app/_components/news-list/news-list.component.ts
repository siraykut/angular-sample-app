import { Component, OnInit } from '@angular/core';
import {NewsSummary} from '../../_viewModels/NewsSummary';
import {NewsService} from '../../_services/news.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsSummaries: NewsSummary[] = [];
  constructor(private newsService: NewsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getNewsSummary();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

  }

  getNewsSummary(): void{
    this.newsService.getNewsSummary().subscribe(data => {
      this.newsSummaries = data;
    });
  }
}
