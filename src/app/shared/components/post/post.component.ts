

import { Component ,OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent  implements OnInit{
  constructor(private postservice :PostService) {}
  Posts!:PostModel[];
  PostPoularys!:PostModel[];
  Items:PostModel[] = this.postservice.getAllPosts();
  pageSize: number = 6; // Nombre d'éléments par page
  currentPage: number = 1;
  totalPages!: number


  ngOnInit(): void {
    this.updateItemPost();
    this.TotalPage();
    this.PostPoularys = this.postservice.getPopularyPost();
    this.IntersectionObsercer1()
  }
  TotalPage(){
    const totalPage = Math.ceil(this.Items.length / this.pageSize)
    this.totalPages = totalPage
  }
  updateItemPost () {
    const start = ((this.currentPage -1 )) *(this.pageSize)
    const end = (this.currentPage )* (this.pageSize)
    this.Posts = this.Items.slice(start , end)

  }

  //recuperations de la precedante page
  getPrecedent(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.updateItemPost();
    }
  }
  //recuperations de la page suivant

  getsuivant(){
    if(this.currentPage < this.totalPages){
      this.currentPage++;

      this.updateItemPost();
    }
  }


  //Ici c'est l'utilisation de L'intersection Observer
  IntersectionObsercer1() {
    const ratio =.2;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };
    const observation = function(entries:any,observer: IntersectionObserver) {
      entries.forEach((entry: any) => {
        if(entry.intersectionRatio > ratio){
          entry.target.classList.add('affichage')
          observer.unobserve(entry.target)
        }
      });
    }
    const observation2 = function(entries:any,observer: IntersectionObserver) {
      entries.forEach((entry: any) => {
        if(entry.intersectionRatio > ratio){
          entry.target.classList.add('reavel-visible')
          observer2.unobserve(entry.target)
        }
      });
    }
    const observation3 = function(entries:any,observer: IntersectionObserver) {
      entries.forEach((entry: any) => {
        if(entry.intersectionRatio > ratio){
          entry.target.classList.add('reavel-visibleright')
          observer2.unobserve(entry.target)
        }
      });
    }
    const observer = new IntersectionObserver(observation, options);
    const observer2 = new IntersectionObserver(observation2, options);
    const observer3 = new IntersectionObserver(observation3, options);
    document.querySelectorAll('[class*="cacher-"]').forEach((el) => observer.observe(el));
    document.querySelectorAll('[class*="reavel-"]').forEach((el) => observer2.observe(el));
    document.querySelectorAll('[class*="reavelright-"]').forEach((el) => observer3.observe(el));
  }

}
