import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input()
  track: any

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }



  saveTrack(id, name, comments) {

    id = this.track.listeners,
      name = this.track.name,
      comments = this.track.artist
    this.track = {
      'trackId': id,
      'trackName': name,
      'comments': comments
    }

    this.service.addService(this.track).subscribe((data) => { })
  }

}
