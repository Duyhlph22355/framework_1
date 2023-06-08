import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {}
  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(`${this.API}`);
  }
  getUserById(id: string): Observable<IUsers> {
    return this.http.get<IUsers>(`${this.API}/${id}`);
  }
  getUserByEmail(email: string): Observable<IUsers> {
    const url = `${this.API}?email=${email}`;
    return this.http.get<IUsers>(url);
  }
  addUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(`${this.API}`, user);
  }
  updateUser(user: IUsers): Observable<IUsers> {
    return this.http.put<IUsers>(`${this.API}/${user.id}`, user);
  }
  deleteCUser(id: string): Observable<IUsers> {
    return this.http.delete<IUsers>(`${this.API}/${id}`);
  }
}
