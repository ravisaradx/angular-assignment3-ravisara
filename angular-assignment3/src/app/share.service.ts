import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, forkJoin, of } from 'rxjs';
import { shareReplay, take, tap } from 'rxjs/operators';

export interface Data {
  count: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { 
    
  }
 
  getData(names: string[]): Observable<Object[]> {
    const observables = names.map(name => this.http.get(`https://api.agify.io/?name=${name}`));
    return forkJoin(observables);
  }

}
