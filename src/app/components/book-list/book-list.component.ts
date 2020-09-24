import { Component, OnInit } from '@angular/core';
import {BookDetailsComponent} from '../book-details/book-details.component';
import { Observable } from "rxjs";
import {Book}from "src/app/book";
import {BookService} from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book:Observable<Book[]>; // used for sending output  data from a child to parent component


  constructor(private bookService :BookService, private router:Router) { }

  ngOnInit() { 
  this.reloadData(); 
  }

  reloadData() {
    this.book = this.bookService.getBookList(); // to fetch all the book details
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  bookDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
