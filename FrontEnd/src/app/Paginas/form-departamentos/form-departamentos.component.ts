import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.services';
import { Departamentos } from '../../interfaces/departamentos';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form-departamentos',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './form-departamentos.component.html',
  styleUrl: './form-departamentos.component.css'
})
export class FormDepartamentosComponent {
  _departamentosService = inject(DepartamentosService);

  allDepartamentos: Departamentos[] = [];

  name: string = "";
  codigo_departamento: number = 0;
  showDiv: boolean = false;
  editMode: boolean = false;  
  editDepartamentoId: string | undefined | null= null;


  getData() {
    this._departamentosService.getDepartamentos().subscribe({
      next: (res: any) => {
        this.allDepartamentos = res.datos;
        console.log(this.allDepartamentos);
      },
      error: (err: any) => {
        console.error("Ocurrio un error al obtener los departamentos", err);
      }
    });
  }

  postData() {
    if (this.name === "" || this.codigo_departamento === 0) {
      alert("Faltan datos");
    }else{
      const newDepartamento: Departamentos = {
        name: this.name,
        codigo_departamento: this.codigo_departamento
      }

      this._departamentosService.postDepartamento(newDepartamento).subscribe({
        next: (res: any) => {
          if(res) {
            console.log("res", res);
            this.getData();
          }else{
            console.error("Ocurrio un error");
          }
        },
        error: (err: any) => {
          console.error("Ocurrio un error", err);
        }
      });
    }
  }

 
  departamentosId(id: string | undefined){
    this.editDepartamentoId = id;
    this.editMode = true;
    this.showDiv = true;
    console.log(this.editDepartamentoId);
  }

  putDepartamento(){
    console.log("Entre");
    console.log(this.editDepartamentoId, this.name, this.codigo_departamento);
    
    if(!this.name || this.codigo_departamento){
      alert("Faltan datos");
    }else if(this.editDepartamentoId){
      const updateDepartamento: Departamentos = {
        name: this.name,
        codigo_departamento: this.codigo_departamento
      }

      this._departamentosService.putDepartamento(updateDepartamento, this.editDepartamentoId).subscribe({
        next: (res: any) => {
          if(res){
            console.log("res", res);
            this.getData();
            this.toggleDiv();
          }else{
            console.error("Ocurrio un error al actualizar el departamento");
          }
        },
        error: (err) => {
          console.error("Ocurrio un error al actualizar", err);
        }
      });
    }
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
    if (!this.showDiv) {
      this.name = "";
      this.editMode = false;
      this.editDepartamentoId = null;
    }
  }

  limpiarCampos() {
    this.name === "";
    this.codigo_departamento === 0;
  }

  ngOnInit() {
    this.getData();
  }
}