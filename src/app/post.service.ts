import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post';
import { Comment } from './comment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

//Verander NIETS aan de interface van PostService en PostListComponent

@Injectable()
export class PostService {

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
   }

   // get comments based on the index
   getCommentsForPost(index: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + index);
   }
}
