import { Component } from '@angular/core';
import { OmdbService } from './services/omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-challenge';
  movies: Array<any> = [];


  constructor(private omdbServices: OmdbService) {

  }

  ngOnInit() {
    this.omdbServices.getMoviesForCategory("carros").subscribe((data:any)=>{
      //console.log("Esta es la data: ", data );
      this.movies = data.Search;
         })

    // this.omdbServices.getMovie().subscribe((resp) => {
    //   console.log('la peliculas es: ', resp);

    // })
  }


}
