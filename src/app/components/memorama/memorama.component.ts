import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styleUrls: ['./memorama.component.css']
})
export class MemoramaComponent implements OnInit {
  img = [
    {id: 1, url: "/assets/img/jett.png"},
    {id: 2, url: "/assets/img/killjoy.jpg"},
    {id: 3, url: "/assets/img/sage.png"},
    {id: 4, url: "/assets/img/sova.jpg"},
    {id: 5, url: "/assets/img/viper.png"},
  ];
  cards : [];
  guardarid = null;
  imgfondo = "/assets/img/fondo1.png";
  aciertos = 4;
  constructor() {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    let count_h = 0;
    for (let i = 0; i< this.aciertos * 4 ; i++){
      if(count_h == this.aciertos){
        count_h = 0;
      }
    let images = this.img[count_h];
    this.cards.push({
      id: images.id,
      url: images.url,
      visible: false,
      activa: true
    });
    count_h++;
    }
  }
    cartaseleccionada(idx){
      if(!this.cards[idx].active){
        return;
      }
      this.cards[idx].visible = true;

      if(this.guardarid ==null){
        this.guardarid = idx;
        this.cards[idx].visible = true;
        this.cards[idx].active = false;
      }else{
        if(this.cards[this.guardarid].id == this.cards[idx].id){
          this.cards[idx].visible = true;
          this.cards[idx].active = false;
          this.guardarid = null;
        }
      }
    }
  }
