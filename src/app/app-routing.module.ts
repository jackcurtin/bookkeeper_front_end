import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {AuthorComponent} from './books/author/author.component';
import {PublisherComponent} from './books/publisher/publisher.component';
import {GenreComponent} from './books/genre/genre.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'publisher',
    component: PublisherComponent
  },
  {
    path: 'genre',
    component: GenreComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
