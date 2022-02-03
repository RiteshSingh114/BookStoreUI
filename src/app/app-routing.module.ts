import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AuthGuardService } from './authservice.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path : "books",component: AllBooksComponent,canActivate:[AuthGuardService]},
{path : "add",component: AddBookComponent},
{path : "signUp",component: SignUpComponent},
{path : "login",component: LoginComponent},
{path : "**",component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
