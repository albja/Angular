import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails: any = [
    {
      name: 'Mojito',
      price: 8,
      image: 'https://mesdelicieusescreations.com/wp-content/uploads/2022/07/mojito-3-saveurs.jpg'
    },
    {
      name: 'Cosmopolitan',
      price: 9,
      image: 'https://www.oceanspray.fr/-/media/OS/US/DotCom/recipes/France/Cocktails/Cosmopolitan_MobileDETAIL.ashx'
    },
    {
      name: 'Bloody Mary',
      price: 7,
      image: 'https://www.foodiecrush.com/wp-content/uploads/2023/03/Best-Bloody-Mary-foodiecrush.com-026.jpg'
    }
  ];

  getCocktails(): any[] {
    return this.cocktails;
  }
}

