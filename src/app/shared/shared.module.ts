import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListDetailComponent } from './components/post-list-detail/post-list-detail.component';
import { SharedRoutingModule } from './shared-routing.module';

import { ShortingPipe } from './pipes/shorting.pipe';
import { PostListPopulaireComponent } from './components/post-list-populaire/post-list-populaire.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostListDetailComponent,
    PostListPopulaireComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ShortingPipe,
  ],
  exports:[
    PostComponent,
    PostListComponent,
    HomeComponent,
    PostListDetailComponent,
    ShortingPipe,
    HeaderComponent
  ]
})
export class SharedModule { }
