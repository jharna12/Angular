import { Component, OnInit } from '@angular/core';
import {Book}from "src/app/book";
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  bookId: number;
  book: Book;

  constructor(private bookService :BookService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.book = new Book();
    this.bookId = this.route.snapshot.params['bookId'];
    this.bookService.getBook(this.bookId).subscribe(data=>{
      console.log(data);
      this.book=data;

    },error=>console.log(error));

  }
  updateBook(){
    this.bookService.updateBook(this.bookId,this.book).subscribe(data=>{
      console.log(data);
     this.book=new Book();
     this.gotoList();
    }, error => console.log(error));
  }
  onSubmit() {
    this.updateBook();    
  }
  gotoList() {
    this.router.navigate(['/book']);
  }

}
