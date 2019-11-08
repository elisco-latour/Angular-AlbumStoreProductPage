import { Injectable } from '@angular/core';

/*
* Own Imports
*/

import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  _album_url = "../assets/album.json";

  constructor( private _http: Http) { }

}
