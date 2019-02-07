import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = "http://localhost:8091/api/v1/track/"
  constructor(private http: HttpClient) { }

  search(val:string) {
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+val+"&api_key=d3abfd03021b6a5af08f8b39a1a1baba&format=json")
  }

  deleteService(val:string){
    this.url = this.url+val;
    return this.http.delete(this.url);
  }

  GetAllService(){
    return this.http.get(this.url);
  }


addService(track:any){
  return this.http.post(this.url,track);
}

updateService(val1:string,val2:string){
  return this.http.put(this.url+val1+"/"+val2,val2);
}

}
