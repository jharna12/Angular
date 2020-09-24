import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book}from "src/app/book";
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
book :Book=new Book();
submitted = false
  constructor(private bookServivce :BookService,private router:Router) { }

  ngOnInit(): void {
  }
  newBook():void
  {
    this.submitted=false;
    this.book=new Book();
  }
  save()
{
  this.bookServivce.createBook(this.book).subscribe(data=>{
    console.log(data);
    this.book=new Book();
    this.gotoList();
  },
  error=>console.log(error));
}
gotoList(){
  this.router.navigate(['/book']);
}
onSubmit() {
  this.submitted = true;
  this.save();    
}
  

}
