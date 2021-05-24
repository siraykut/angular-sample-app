import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../_services/comment.service';
import {Comment} from '../../_models/Comment';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService: CommentService) {
  }

  @Input()  newsId!: string;
  commentList: Comment[] = [];
  model: Comment = new Comment();

  ngOnInit(): void {
    this.getCommentsByNewsId(Number(this.newsId));
  }
  getCommentsByNewsId(Id: number): void {
    this.commentService.getComments(Id).subscribe(data => {
      this.commentList = data;
    });
  }
  saveCommand(form: NgForm): void {
    this.model.Email = form.value.txtEmail;
    this.model.Comment = form.value.txtCommentText;
    this.model.Id = 9; // example value
    this.commentService.saveCommand(this.model);
  }
}
