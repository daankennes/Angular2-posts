import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';

//Verander NIETS aan de interface van PostService en PostListComponent

@Injectable()
export class PostService {

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {

    return this.http.get('http://jsonplaceholder.typicode.com/posts')
                .map((res:Response) => res.json());
                //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {

    return this.http.get('http://jsonplaceholder.typicode.com/comments')
    .filter((comment: Comment) => comment.postId === 1)
    .map((res: Response) => res.json() );
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));

   }
}
