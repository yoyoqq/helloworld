import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
