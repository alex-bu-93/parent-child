import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceCommunicationService {

  private _counterPlusOne$ = new Subject<number>()
  public get counterPlusOne$() { return this._counterPlusOne$.asObservable(); }
  public set counterPlusOne(value: number) { this._counterPlusOne$.next(value); }

}
