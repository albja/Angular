import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';


const ROUTES: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'user', component: UserProfileComponent },
    { path: 'my-form', component: MyFormComponent },
    { path: 'developer', component: DeveloperComponent },
    { path: 'cocktailList', component: CocktailListComponent },
    { path: '**', redirectTo: 'user' }

];

export { ROUTES };