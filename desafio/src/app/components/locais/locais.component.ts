import { Component, OnInit } from '@angular/core';
import { LocaisApi } from 'src/app/services/locais-api';
import { LocaisApiService } from 'src/app/services/locais-api.service';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.css']
})
export class LocaisComponent implements OnInit {


  locaisLista:LocaisApi[];


  constructor(private locaisPriv:LocaisApiService) { }

  ngOnInit(): void {
    this.locaisPriv.List().subscribe( (lista) => {this.locaisLista=lista;}  )
  }

}
