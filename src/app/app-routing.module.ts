import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuardService } from './auth-guard.service';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',redirectTo:"/home",pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'Addbook',canActivate:[AuthGuardService], component: AddBookComponent },
  {
    path: 'ViewAll',canActivate:[AuthGuardService], component: BooksComponent, children: [
      { path: ':id', component: BookDetailComponent }
    ]
  },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'librarian',canActivate:[AuthGuardService],component:LibrarianComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
