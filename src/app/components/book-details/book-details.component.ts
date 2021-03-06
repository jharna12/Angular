import { Component, OnInit } from '@angular/core';
import {Book}from "src/app/book";
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId: number
  book:Book

  constructor(private bookService :BookService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.book = new Book();

    this.bookId = this.route.snapshot.params['bookId'];
    
    this.bookService.getBook(this.bookId)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['book']);
  }

}
