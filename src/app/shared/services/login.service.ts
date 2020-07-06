import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from '../models/subscriber';
import { LoginSubscriber } from '../models/login-subscriber';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { } 
  
  login(email:string,password:string):Observable<Subscriber>
  {
    const subscriber=new LoginSubscriber(email,password);
   
      const res=this.http.post<any>("api/subscriber/login",subscriber);
      return res;
  }
  // register(UserName:string,Password:string):Observable<string>
  // {
  //   const patient=new Patient();
  //   patient.name=UserName;
  //   patient.password=Password;
  //     const res=this.http.post<string>("api/patient/register",patient);
  //     return res;
  // }
}
