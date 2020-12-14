import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/Book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  bookChanged = new EventEmitter<Book[]>();
  book: Observable<Book[]> = this.fetchBooks();

  constructor(private http: HttpClient) { }

  private books: Book[] = [
    new Book("Life is what you make it",
      "preeti Sheenoy",
      10, "https://m.media-amazon.com/images/I/41mkPm+3f+L.jpg"),
    new Book("Half GirlFriend",
      "Chetan Bhagat",
      8, "https://upload.wikimedia.org/wikipedia/en/c/c6/Half_Girlfriend.jpg"),
    new Book("Revolution  2020",
      "Chetan Bhagat",
      6, "https://upload.wikimedia.org/wikipedia/en/4/44/Revolution_2020.jpg"),
      new Book("Harry Potter Deathly Hallows",
      "J.K Rowling",
      6, "https://images3.penguinrandomhouse.com/cover/9780739360385")
  ];

  getBooks() {
    return this.books.slice();
    // this.book.pipe()
  }

  getBook(index: number) {
    return this.books[index];
    //return this.book.pipe();
    // return this.http.get<Book[]>('http://localhost:3000/books/{index}');
  }

  addBook(book: Book) {
    this.books.push(book);
    this, this.bookChanged.emit(this.books);
  }

  fetchBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  saveBook(book: Book) {
    this.http.post('http://localhost:3000/books', book).subscribe(
      res => console.log(res)
    );
  }

  fetchBook() {
    return this.http.get('http://localhost:3000/books')
      .pipe(map(response => {
        const bookArray = [];
        for (const key in bookArray) {
          if (response.hasOwnProperty(key)) {
            bookArray.push({ ...bookArray[key], id: key })
          }
        }
        return bookArray;
      }));
  }

  deleteBooks(){
    return this.http.delete('http://localhost:3000/books');
  }

  assisgnToUser(book: Book) {
    // return this.userBooks.push(book);
  }
}
