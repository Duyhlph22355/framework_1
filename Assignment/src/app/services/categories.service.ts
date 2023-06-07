import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategories } from '../interface/ICategories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API = 'http://localhost:3000/categories';

  constructor(public http: HttpClient) {}
  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(`${this.API}`);
  }
  getCategoriesById(id: string): Observable<ICategories> {
    return this.http.get<ICategories>(`${this.API}/${id}`);
  }

  addCategory(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(`${this.API}`, category);
  }
  updateCategory(category: ICategories): Observable<ICategories> {
    return this.http.put<ICategories>(`${this.API}/${category.id}`, category);
  }
  deleteCategory(id: string): Observable<ICategories> {
    return this.http.delete<ICategories>(`${this.API}/${id}`);
  }
}
