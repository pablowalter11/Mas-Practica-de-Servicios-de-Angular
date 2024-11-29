import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Cuchillo } from '../interface/cuchillo.interface';

@Injectable({
  providedIn: 'root'
})
export class CuchilloService {

  http = inject(HttpClient)

  urlBase = environment.urlBase

  getCuchillos(): Observable<Cuchillo[]>{
    return this.http.get<Cuchillo[]>(this.urlBase)
  }

  getCuchilloById(id: string | null): Observable<Cuchillo>{
    return this.http.get<Cuchillo>(`${this.urlBase}/${id}`)
  }

  postCuchillo(cuchi: Cuchillo): Observable<Cuchillo>{
    return this.http.post<Cuchillo>(this.urlBase, cuchi)
  }

  putCuchillo(cuchi: Cuchillo, id: string | null): Observable<Cuchillo>{
    return this.http.put<Cuchillo>(`${this.urlBase}/${id}`, cuchi)
  }

  deleteCuchilloById(id: any): Observable<void>{
    return this.http.delete<void>(`${this.urlBase}/${id}`)
  }
}
