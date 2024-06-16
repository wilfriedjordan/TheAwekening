import { Component,Input } from '@angular/core';
import { PostModel } from '../../models/post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  @Input() post!:PostModel;

}
