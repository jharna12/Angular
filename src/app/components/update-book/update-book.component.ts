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
  id: number;
  book: Book;

  constructor(private bookService :BookService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe(data=>{
      console.log(data);
      this.book=data;

    },error=>console.log(error));

  }
  updateBook(){
    this.bookService.updateBook(this.id,this.book).subscribe(data=>{
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
