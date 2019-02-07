import { Component, OnInit, Output, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-comments',
  templateUrl: './update-comments.component.html',
  styleUrls: ['./update-comments.component.css']
})
export class UpdateCommentsComponent implements OnInit {

 @Input() 
 track;
val1:string;
val2:string;
  constructor(private service:ServiceService) { }

  
  ngOnInit() {
  }

 updateComments(comments){
      this.val1 = this.track.trackId
      this.val2 = comments
    this.service.updateService(this.val1,this.val2).subscribe()
  }

}
