import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Commande } from '../Models/commande';
import { Observable, from } from 'rxjs';
import {URL} from '../../environments/environment';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({ 
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getCommandes( ): Observable<Commande[]>{
    return this.http.get<Commande []>(URL+'/commande').pipe();

  }

  getCommande( id : Number) : Observable<Commande>
  {
    return this.http.get<Commande>(URL+'/commande/'+id).pipe();
  }

  postCommande( commande : Commande) : Observable<Commande>
  {
    return this.http.post<Commande>(URL+'/commande',+commande).pipe();
  }

  
}
