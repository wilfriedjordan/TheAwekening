import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  Posts:PostModel[]=[
    {
        "id": 1,
        "image": "./../../../assets/illustrations/angular.jpg",
        "title": "Les Tendances du Développement Web en 2024",
        "content": "Découvrez les tendances à suivre en matière de développement web en 2024...",
        "createdDate": "2024-01-01"
    },
    {
        "id": 2,
        "image": "./../../../assets/illustrations/2.jpg",
        "title": "Introduction à Angular 15",
        "content": "Angular 15 apporte de nouvelles fonctionnalités et améliorations...",
        "createdDate": "2024-01-15",
        
    },
    {
        "id": 3,
        "image": "./../../../assets/illustrations/4.jpg",
        "title": "Tutoriel: Créer un Blog avec Angular",
        "content": "Suivez ce tutoriel pour créer votre propre blog avec Angular...",
        "createdDate": "2024-02-01"
    },
    {
        "id": 4,
        "image": "./../../../assets/posts/js.jpg",
        "title": "10 Conseils pour Apprendre le Développement Web",
        "content": "Voici dix conseils pratiques pour vous aider à maîtriser le développement web...",
        "createdDate": "2024-02-10",
        "populary":true,
    },
    {
        "id": 5,
        "image": "./../../../assets/posts/ts1.jpeg",
        "title": "Comment Utiliser TypeScript avec Angular",
        "content": "TypeScript est le langage par défaut d'Angular. Apprenez comment l'utiliser efficacement...",
        "createdDate": "2024-02-15",
        "populary":true,
    },
    {
        "id": 6,
        "image": "./../../../assets/illustrations/5.jpg",
        "title": "Les Meilleures Pratiques en Développement Front-End",
        "content": "Suivez ces meilleures pratiques pour améliorer vos compétences en développement front-end...",
        "createdDate": "2024-03-01"
    },

    {
        "id": 7,
        "image": "./../../../assets/posts/seo1.png",
        "title": "Les Nouveautés d'Angular CLI",
        "content": "Découvrez les dernières fonctionnalités de l'outil Angular CLI...",
        "createdDate": "2024-03-15",
        "populary":true,
    },
    {
        "id": 8,
        "image": "./../../../assets/posts/js.jpg",
        "title": "Déboguer les Applications Angular",
        "content": "Apprenez des techniques avancées pour déboguer vos applications Angular...",
        "createdDate": "2024-04-01"
    },
    {
        "id": 9,
        "image": "./../../../assets/illustrations/css.jpg",
        "title": "Utilisation des Composants Réutilisables",
        "content": "Créez des composants réutilisables dans vos applications Angular pour une meilleure efficacité...",
        "createdDate": "2024-04-15"
    },

    {
      "id": 14,
      "image": "./../../../assets/illustrations/php.jpg",
      "title": "Les Meilleures Pratiques en Développement Front-End",
      "content": "Suivez ces meilleures pratiques pour améliorer vos compétences en développement front-end...",
      "createdDate": "2024-03-01"
  },

    {
        "id": 10,
        "image": "./../../../assets/posts/react2.png",
        "title": "Angular vs React: Quelle est la Meilleure Option?",
        "content": "Explorez les différences entre Angular et React pour savoir quelle technologie vous convient le mieux...",
        "createdDate": "2024-05-01",
        "populary":true,
    },
    {
      "id": 11,
      "image": "./../../../assets/posts/seo4.jpg",
      "title": " Comprendre le SEO en quelques minutes ",
      "content": " Apprenez comment le SEO fonctionne et pourquoi il est important... ",
      "createdDate": "2024-02-15"
   },
   {
    "id": 14,
    "image": "./../../../assets/illustrations/tech.jpg",
    "title": " Comprendre le SEO en quelques minutes ",
    "content": " Apprenez comment le SEO fonctionne et pourquoi il est important... ",
    "createdDate": "2024-02-15",
    "populary":true,
 },
   {
    "id": 12,
    "image": "./../../../assets/posts/moteur.jpeg",
    "title": "Distinguer les différents moteurs de recherche",
    "content": "Decouvez les differentes techniques pour distinguer les differentes moteurs de recherche...",
    "createdDate": "2024-02-15"
  },

  {
    "id": 13,
    "image": "./../../../assets/illustrations/seo.jpg",
    "title": "Prendre en main le Seo Pour le bon referencement",
    "content": " Apprenez comment le SEO fonctionne et pourquoi il est important pour la reussite de votre projet et celuis de vos clients...",
    "createdDate": "2024-05-01",
    "populary":true,
  },
  {
    "id": 15,
    "image": "./../../../assets/illustrations/1.jpg",
    "title": " Comprendre le SEO en quelques minutes ",
    "content": " Apprenez comment le SEO fonctionne et pourquoi il est important... ",
    "createdDate": "2024-02-15"
 },

]

constructor() { }
  /**
   *
   * @returns un tableau de posts
   */
  getAllPosts():PostModel[]{
    return this.Posts
  }

  //retourner les posts populaire
  getPopularyPost():PostModel[]{
    return this.Posts.filter(post => post.populary === true)
  }
}
