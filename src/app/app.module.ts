import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './post-list.component';
import { PostService } from './post.service'

const appRoutes: Routes = [
  { path: '**', component: PostListComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, //PostListComponent,
                RouterModule.forRoot(appRoutes) ],
  declarations: [ ],
  providers:    [ ],
  bootstrap:    [ ]
})

export class AppModule { }
