import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  private baseUrl : string = `${environment}+'auth/'`

  constructor(http : HttpClient) { }
}
