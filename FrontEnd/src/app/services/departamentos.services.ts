import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from '../interfaces/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private _httpClient = inject(HttpClient);
  private URL_DEPARTAMENTOS = 'http://localhost:3000/departamentos';

  

 
  postDepartamento(departamento: Departamentos) {
    return this._httpClient.post(this.URL_DEPARTAMENTOS + "/crear", departamento);
  }

  
  getDepartamentos() {
    return this._httpClient.get(this.URL_DEPARTAMENTOS + "/obtener");
  }

 
  putDepartamento(departamentoPut: Departamentos, id: string | undefined) {
    return this._httpClient.put(this.URL_DEPARTAMENTOS + "/actualizar" + id, departamentoPut);
  }
}