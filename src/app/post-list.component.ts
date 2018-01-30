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
    //index + 1: note index starts at 1
    this.comments = this.postService.getCommentsForPost(index + 1);
    this.comments.subscribe(data => {
        this.printComments(data);
    });
   }

   printComments(comments: Comment[]): void {
    for (let y = 0; y < comments.length; y++){
        console.log(comments[y].name);
    }
   }
}
