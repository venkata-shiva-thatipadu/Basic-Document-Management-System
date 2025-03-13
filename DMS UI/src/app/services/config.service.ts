import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })
 export class ConfigService {
 
   private configUrl = 'assets/base.json';  // Path to the JSON file
 
   constructor(private http: HttpClient) {}
 
   getConfig(): Observable<any> {
     return this.http.get(this.configUrl);
   }
 
   async getData() {
     return new Promise<any>((resolve, reject) => {
       this.getConfig().subscribe(
         (data) => {
           resolve(data);
         },
         (error) => {
           reject(error);
         }
       );
     });
   }
 
 }