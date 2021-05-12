import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  public genres: [] |any;
  name: string;
  description: string;
  constructor(private genreService: GenreService) { }
  getGenres(): any {
    this.genreService.getGenres().subscribe(response => {
      this.genres = response;
    }, err => console.log(err));
  }
  createGenre(): any{
    const newGenre = {
      name: this.name,
      description: this.description
    };
    this.genreService.createGenre(newGenre).subscribe(response => {
      this.genres = [...this.genres, response];
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getGenres();
  }

}
