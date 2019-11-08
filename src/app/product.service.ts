import { Injectable } from '@angular/core';

/*
* Own Imports
*/

import { Http, Response } from '@angular/http';
import { map } from 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  _album_url = "../assets/album.json";

  constructor( private _http: Http) { }

  getAlbum( id: int ) {
    return this._http.get(_album_url).response.json();
  }
  
}
