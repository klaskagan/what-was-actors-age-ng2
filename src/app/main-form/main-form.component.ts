import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Movie} from '../movie/movie.model';
import {MovieService} from '../movie/movie.service';

@Component({
  selector: 'wwaa-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
  providers: [MovieService]
})
export class MainFormComponent implements OnInit {

  form: FormGroup;
  result: string;
  movieResultsVisible: boolean;
  badRequest: boolean;
  movieSearchResult: Movie = new Movie();

  constructor(public fb: FormBuilder, private movieService: MovieService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: '',
      actor: ''
    });
  }

  getMovies(query: string) {
    var parsedQuery: any[] = this.parseQuery(query);
    this.movieService.findMovie(parsedQuery[0], parsedQuery[1]).subscribe(
      movie => {
        if( movie.Response === "False" ) {
          this.badRequest = true;
          this.movieResultsVisible = false;
        } else {
          this.movieSearchResult = movie;
          this.movieResultsVisible = true;
          this.badRequest = false;
        }

      },
      err => {
        this.badRequest = true;
        this.movieResultsVisible = false;
      }
    );
  }

  private parseQuery(query) : string[] {
    let year = query.substr(query.length - 4);
    if (isNaN(year)) {
      return [query];
    } else {
      let title = query.slice(0, -4).trim();
      return [title, year];
    }
  }

}
