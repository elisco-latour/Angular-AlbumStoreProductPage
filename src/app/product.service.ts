import { Injectable } from '@angular/core';
import { map } from 'rxjs/add/operator/map';
/*
* Own Imports
*/
import { Http, Response } from '@angular/http';


@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor( private _http: Http) {
    console.log("Data service connected");
   }

  getAlbum( id: number ) {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }

}
