import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { partner } from '../model/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(private http: HttpClient) { }

  GetPartnerList(): Observable<partner[]> {
    return this.http.get<partner[]>(environment.APIURL + "partner")
  }

  GetPartnerById(id: number): Observable<partner> {
    return this.http.get<partner>(environment.APIURL + "partner/" + id)
  }
}
