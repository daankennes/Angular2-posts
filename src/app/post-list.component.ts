import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from './post.service';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { Comment } from './comment';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

//Verander NIETS aan de interface van PostService en PostListComponent

export class PostListComponent  {

   @Output() commentsFound = new EventEmitter();

   posts: Observable<Post[]>;
   comments: Observable<Comment[]>;

   constructor(private postService: PostService) {}

   ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
   }

   getComments(index: number): void {
    this.comments = this.postService.getCommentsForPost(index);
   }

   printComments(comments: Comment[]): void {
    console.log(this.comments);
   }
}
