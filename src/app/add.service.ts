import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddService {
  _url="http://localhost:8091/api/v1/track";
  constructor(private http:HttpClient) { }

addService(track:any){
  return this.http.post(this._url,track);
}

}