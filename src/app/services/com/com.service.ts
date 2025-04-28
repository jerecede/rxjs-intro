import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  sbj = new Subject<string>();
  bSbj = new BehaviorSubject('start');
  reSbj = new ReplaySubject<string>(10);

  constructor() {

  }
}
