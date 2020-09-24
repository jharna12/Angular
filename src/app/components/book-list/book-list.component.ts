import { Component, OnInit } from '@angular/core';
import {BookDetailsComponent} from '../book-details/book-details.component';
import { Observable } from "rxjs";
import {Book}from "src/app/book";
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book:Observable<Book[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
