import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../services/author/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
   public authors: [] | any;
   firstName: string;
   lastName: string;
   age: number;
   nationality: string;
   constructor(private authorService: AuthorService) { }
  getAuthors(): any {
    this.authorService.getAuthors().subscribe(response => {
      this.authors = response;
    }, err => console.log(err));
  }
  createAuthor(): any{
      const newAuthor = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        nationality: this.nationality
      };
      this.authorService.createAuthor(newAuthor).subscribe(response => {
        this.authors = [...this.authors, response];
      }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getAuthors();
  }

}
