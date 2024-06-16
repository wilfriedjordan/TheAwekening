import { Component,Input } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-list-populaire',
  templateUrl: './post-list-populaire.component.html',
  styleUrl: './post-list-populaire.component.scss'
})
export class PostListPopulaireComponent {
  @Input() PostPoulary!:PostModel;
}
