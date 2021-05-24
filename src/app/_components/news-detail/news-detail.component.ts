import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NewsService} from '../../_services/news.service';
import {NewsSummary} from '../../_viewModels/NewsSummary';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements  OnInit  {

  detail: NewsSummary = new NewsSummary();
  newsId!: number;
  constructor(
    private newsService: NewsService,
    private activatedLink: ActivatedRoute,
    private spinner: NgxSpinnerService)
  { }
  getNewsDetail(): void{
    const Id = this.activatedLink.snapshot.params.Id;
    this.newsService.getNewsDetail(Id).subscribe(data => {
      this.detail = data[0];
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    this.getNewsDetail();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
