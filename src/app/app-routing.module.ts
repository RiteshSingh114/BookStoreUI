import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path : "books",component: AllBooksComponent},
{path : "add",component: AddBookComponent},
{path : "SignUp",component: SignUpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
