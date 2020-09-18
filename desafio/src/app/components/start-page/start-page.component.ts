import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  brennand:string = 'https://imagens1.ne10.uol.com.br/blogsne10/social1/uploads/2017/05/oficinabrennand.jpg';
  museu:string = ' https://upload.wikimedia.org/wikipedia/commons/f/f8/Fachada_do_Muhne.jpg';
  marco:string= 'https://media-cdn.tripadvisor.com/media/photo-s/18/00/2e/31/recife.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
