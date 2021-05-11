import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  public authors: [];

  constructor(private authorService: AuthorComponent) { }

  getAuthors(): any {
    this.authorService.getAuthors().subscribe(response => {
      this.authors = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getAuthors();
  }

}
