import { Component, OnInit } from '@angular/core';
import { Book } from "../Models/books.interface";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {


books : Book[] = [
    {
      name : "Clean Code",
      author : "Robert C. Martin",
      imgUrl : "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      disabled: false
    },
    {
      name: "Pragmatic Programmer",
      author: "David Thomas",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX380_BO1,204,203,200_.jpg",
      disabled: true
    },
    {
      name: "Advanced Python Programming",
      author: "Quan Nguyen",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/410WdyT2qpL._SX404_BO1,204,203,200_.jpg",
      disabled: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event:any, book:Book) {
    alert("Book Saved: " + book.name)
  }

}
