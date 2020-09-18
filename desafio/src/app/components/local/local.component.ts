import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LocaisApi } from 'src/app/services/locais-api';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnChanges {

  @Input() locaisListaCard:LocaisApi;

  address:string;
  image:string;
  link:string;

  constructor() { }

  ngOnChanges(): void {
    if(this.locaisListaCard != null){
      this.image = this.locaisListaCard.image;
      this.address = this.locaisListaCard.address;
      this.link = this.locaisListaCard.link;
    }
  }

}
