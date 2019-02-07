import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  track:any;
  value: string;
  tracks: any;
  constructor(private searchService: ServiceService) { }

  ngOnInit() {
  }

  onSearch(value) {
    this.value = value
    this.searchService.search(value).subscribe((response) => { this.tracks = response['results']['trackmatches']['track'] })

  }

  image(tracks) {
  //  this.onSearch(value)
  //  this.searchService.search(value).subscribe((response) => { this.tracks = response['results']['trackmatches']['track'] })
    return tracks['image'][2]['#text'];

  }

  saveTrack(id, name, comments) {
    this.track = {
      'trackId': id,
      'trackName': name,
      'comments': comments
    }

    this.searchService.addService(this.track).subscribe((data) => { })
  }
}
