import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent } from './components/book-list/book-list.component';
import {CreateBookComponent } from './components/create-book/create-book.component';
import {UpdateBookComponent } from './components/update-book/update-book.component';
import {BookDetailsComponent } from './components/book-details/book-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookListComponent },
  { path: 'add', component: CreateBookComponent },
  { path: 'update/:bookId', component: UpdateBookComponent },
  { path: 'details/:bookId', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
