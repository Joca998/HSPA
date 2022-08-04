import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPosition } from 'monaco-editor';
import { IProperty } from '../property/IProperty.inteface';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<any>=[];
        for (const id in data){
          if (data.hasOwnProperty(id)){
          propertiesArray.push(data);
          }
        }
        return propertiesArray;
      }
      )
    );
  }
}


