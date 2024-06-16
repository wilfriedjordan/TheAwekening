import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  ngOnInit():void{
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
