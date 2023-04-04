import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private _httpClient = inject(HttpClient);

  test(){
    const url = '/api/search';
    const params = new HttpParams()
      .set('q', 'eminem')
    return this._httpClient.get(url, {params});
  }

  searchSongs(query: string, type: 'album' | 'track'): Observable<any> {

    const url = '/api/search';
    const params = new HttpParams()
      .set('q', query)
      .set('type', type);
    return this._httpClient.get<any>(url, { params });


    // const params = new HttpParams().set('q', query).set('type', type);
    // const url = 'https://api.deezer.com/search';
    // return this._httpClient.get<any>(url, { params }).pipe(
    //   map(response => {
    // Manipular la respuesta si es necesario
    //     return response.data;
    //   })
    // );


  }


}
