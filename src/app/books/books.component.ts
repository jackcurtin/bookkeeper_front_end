import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book/book.service';
import {AuthorService} from '../services/author/author.service';
import {GenreService} from '../services/genre/genre.service';
import {PublisherService} from '../services/publisher/publisher.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  allAuthors = [];
  allGenres = [];
  allPublishers = [];
  books = [];
  title: string;
  synopsis: string;
  pageCount: number;
  isbn: number;
  authorIndex: number;
  genreIndex: number;
  publisherIndex: number;

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private genreService: GenreService,
              private publisherService: PublisherService) { }
  getBooks(): any {
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    }, err => console.log(err));
  }
  createBook(): any{
    const newBook = {
      title: this.title,
      synopsis: this.synopsis,
      pageCount: this.pageCount,
      isbn: this.isbn,
      author_first_name: this.allAuthors[this.authorIndex].firstName,
      author_last_name: this.allAuthors[this.authorIndex].lastName,
      genre_name: this.allGenres[this.genreIndex].name,
      publisher_name: this.allPublishers[this.publisherIndex].name
    };
    this.bookService.createBook(newBook).subscribe(response => {
      this.books = [...this.books, response];
    }, err => console.log(err));
  }

  getAllAuthors(): any {
    this.authorService.getAuthors().subscribe(response => {
      this.allAuthors = response;
    }, err => console.log(err));
  }
  getAllGenres(): any {
    this.genreService.getGenres().subscribe(response => {
      this.allGenres = response;
    }, err => console.log(err));
  }
  getAllPublishers(): any {
    this.publisherService.getPublishers().subscribe(response => {
      this.allPublishers = response;
    }, err => console.log(err));
  }


  ngOnInit(): void {
    this.getAllAuthors();
    this.getAllGenres();
    this.getAllPublishers()
    this.getBooks();
  }

}
