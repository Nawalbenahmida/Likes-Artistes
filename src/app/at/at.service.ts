import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Disco } from '../disco/disco';

const CLE = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=08336f41a9b8fa739ab2b39405c99650&format=json';

@Injectable()
export class AtService {
    
    private discoSubject = new Subject<Disco[]>();
    
    discos: Observable<Disco[]>;

  constructor(private http: HttpClient) { 
      
  this.discos = this.discoSubject.asObservable();
        
        this.http.get<any>(CLE).subscribe(data =>{
            this.discoSubject.next(data.topartists.artist);
            
        });
  
  }

}
