import { Component, OnInit } from '@angular/core';
import { DragDropService } from '../../../core/model/service/drag-drop/drag-drop.service';
import { DataExplicacion } from 'src/app/core/model/interfaces/data-explicacion.interface';
import { ObtenerDataService } from 'src/app/core/model/service/obtener-data/obtener-data-service';
import { Tips } from 'src/app/core/model/interfaces/tips.interface';



@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent {

  data: DataExplicacion;
  tips: Tips;
  resComparar: String;

  public drags: string[];
  public drops: string[];

  constructor(
    private dragDropService: DragDropService,
    private obtenerDataService: ObtenerDataService
  ) {
    this.data = {
      titulo: '',
      explicacion: '',
      pregunta: '',
      imagen: '',
      respuesta: ''
    };
    this.tips = {
      sintaxis: "",
      divideConquista: "",
      documentacion: ""
    };
    this.drags = this.dragDropService.drags;
    this.drops = this.dragDropService.drops;
  }

  ngOnInit(): void {
    this.limpiarDrops();
  }

  compareArrays(): void {
    let iguales: boolean;
    let dropRespuesta = this.drops.join(' ').toUpperCase();
    let jsonRespuesta = this.data.respuesta.toUpperCase();
    [this.resComparar, iguales] = this.obtenerDataService.coparaRespuestas(dropRespuesta, jsonRespuesta);
    if (iguales) {
      this.tips = this.obtenerDataService.obtenerTips('tips');
      //crear un componente modal para mostrar estas sugerencias
    }
  }

  public limpiarDrops(): void {
    this.drops.length = 0;
  }

  // Llamar al método del servicio
  public dropItem($event) {
    this.dragDropService.drop($event);
  }
}