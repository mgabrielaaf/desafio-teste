import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  address:string = 'Marco Zero';
  image:string = 'https://media-cdn.tripadvisor.com/media/photo-s/18/00/2e/31/recife.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
