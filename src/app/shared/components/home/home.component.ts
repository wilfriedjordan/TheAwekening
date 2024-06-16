import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.IntersectionObsercer1();
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
    const observer = new IntersectionObserver(observation, options);
    document.querySelectorAll('[class*="cacher-"]').forEach((el) => observer.observe(el));
  }
}
