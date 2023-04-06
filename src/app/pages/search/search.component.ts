import { Component, OnInit, inject } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private _musicService = inject(MusicService);

  constructor() {
  }


  ngOnInit(): void {
    // this._musicService.test().subscribe(resp => {
    //   console.log('mostrando eminen');
    //   console.log(resp);
    // })
    this.search(); 
  }

  search() {
    this._musicService.searchSongs('good things', 'album').subscribe(res => {
      console.log('respuesta');
      console.log('search', res)
    })
  }
}
