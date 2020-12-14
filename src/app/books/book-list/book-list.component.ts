import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AddBookService } from '../../add-book/add-book.service';
import { Book } from '../../shared/Book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: AddBookService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.books = this.bookService.fetchBooks();
  }

  navigate() {
    this.router.navigate(['/Addbook'], { relativeTo: this.route })
  }

}
