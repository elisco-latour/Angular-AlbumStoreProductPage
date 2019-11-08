import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
/*
* Own Imports
*/
import { Http, Response } from '@angular/http';
import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor( private _http: Http) {
    console.log("Data service connected");
   }

  getAlbum( id: number ): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

}
