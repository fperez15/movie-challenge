import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OmdbService {


   constructor(private http: HttpClient) { }

   getMoviesForCategory(category: string) {
    const url= `http://www.omdbapi.com/?i=tt3896198&apikey=3d0c1994&s=${category}`
    return this.http.get(url)
   }

  //  getMovie(){
  //   const url2= 'http://www.omdbapi.com/?i=tt3896198&apikey=3d0c1994'
  //   return this.http.get(url2)
  //  }
}
