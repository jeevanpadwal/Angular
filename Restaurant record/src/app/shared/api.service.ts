
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BankData} from '../bank-dash/bank.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  addBank(data: BankData) {

    return this._http.post<any>("http://localhost:3000/posts", data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //POST request
  postBank(data:any ) 
  {
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
    }))
  }

   //GET request
   getBank() 
   {
     return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
       return res;
     }));
   }

   //delete request
  deleteBank(id:number) 
  {
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }));
  }
  //update request
  updateBank( id: number,data: any)
  {
   return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
    return res;
  }));
  } 


}
