import { Component, OnInit, inject } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
  private _musicService = inject(MusicService);

  constructor() {
    // this._musicService.searchSongs('nevermind', 'album').subscribe(albums => {
    //   console.log('Albums:', albums);
    // });

    // this._musicService.searchSongs('smells like teen spirit', 'track').subscribe(tracks => {
    //   console.log('Tracks:', tracks);
    // });
  }


  ngOnInit(): void {
    this._musicService.test().subscribe(resp => {
      console.log('mostrando eminen');
      console.log(resp);
    })
  }
}
