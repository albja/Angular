import { Component } from '@angular/core';
import { Developer } from 'src/model/developer.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'Alban',
    'D/Poisson',
    33,
    'male',
    'Je suis un génie, champion magicien ',
    [
      {
        name: 'Ruby',
        logo: 'https://e7.pngegg.com/pngimages/980/847/png-clipart-ruby-on-rails-logo-programming-language-rubygems-ruby-angle-design-thumbnail.png',
        site: 'https://angular.io',
      },
      {
        name: 'Python',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        site: 'https://www.python.org/',
      },

      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
        site: 'https://angular.io',
      },
      {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png',
        site: 'https://reactjs.org',
      },
      {
        name: 'JavaScript',
        logo: 'https://logos-marques.com/wp-content/uploads/2021/03/JavaScript-Logo.png',
        site: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
      },
    ]
  );
}