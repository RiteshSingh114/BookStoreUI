import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {
  Books: any;
  error: any;

  constructor(private service : BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() : void{
    this.service.getBooks().subscribe(
      data => this.Books = data,
      error => this.error = error
    )
  }

}
