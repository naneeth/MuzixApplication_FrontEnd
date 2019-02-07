import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {

  tracks:any;
  constructor(private service:ServiceService) { }

  ngOnInit() {
    {
      this.service.GetAllService().subscribe((response)=>this.tracks=response)
      this.tracks;
    }
  }

  get(){
    this.service.GetAllService().subscribe((response)=>this.tracks=response)
    this.tracks;
  }


  deleteTrack(val){
    this.service.deleteService(val).subscribe((data)=>{console.log('deletedSuccessfully')})
  }
}
