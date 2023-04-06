import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private _httpClient = inject(HttpClient);

  test() {
    // const url = '/api/search';
    // const params = new HttpParams()
    //   .set('q', 'eminem')
    // return this._httpClient.get(url, {params});
    return this._httpClient.get('https://api.deezer.com/search?q=eminem');
  }

  searchSongs(query: string, type: 'album' | 'track'): Observable<any> {

    const url = 'https://api.deezer.com/search';
    const params = new HttpParams()
      .set('q', `${type}:'${query}'`);
    return this._httpClient.get<any>(url, { params });
  }


}
