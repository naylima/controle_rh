import { Injectable } from '@angular/core';

import { Candidato } from '../Candidato';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../Status';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  register(candidato: Candidato): Observable<any> {
    const url = `${this.baseApiUrl}/start`
    return this.http.post<FormData>(url, candidato  )
  }

  schedule(candidato: Candidato): Observable<Candidato> {
    
    const url = `${this.baseApiUrl}/schedule`
    return this.http.post<Candidato>(url, candidato  )
  }

  disqualify(candidato: Candidato): Observable<Candidato> {
    const url = `${this.baseApiUrl}/disqualify`
    return this.http.post<Candidato>(url, candidato  )
  }

  approve(candidato: Candidato): Observable<Candidato> {
    const url = `${this.baseApiUrl}/approve`
    return this.http.post<Candidato>(url, candidato  )
  }

  getStatus(candidato: Candidato): Observable<Candidato> {  
    const codCandidato = candidato.codCandidato; 
    const url = `${this.baseApiUrl}/status/candidate/${codCandidato}`;
    return this.http.get<Candidato>(url);
  }

  getApproved(): Observable<string[]> {
    const url = `${this.baseApiUrl}/approved`;
    return this.http.get<string[]>(url);
  }
}
