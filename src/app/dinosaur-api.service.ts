import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dinosaur } from './dinosaur';

@Injectable({
  providedIn: 'root'
})
export class DinosaurAPIService {

  constructor(private http: HttpClient) { }

  getDinosaurs(): Observable<any>{
    return this.http.get<any>('https://dinosaur-facts-api.shultzlab.com/dinosaurs');
  }
}