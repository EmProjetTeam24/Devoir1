import { Component, OnInit } from '@angular/core';
import {clients} from './data';
import {produits} from './data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() {
    clients[0].nom ="root";
    clients[0].password ="1234";
    clients[0].type =1;

    clients[1].nom ="emile";
    clients[1].password ="1234";
    clients[1].type =2;

    produits[0].nomproduit="PC1";
    produits[0].description="HP pc"
    produits[0].image="./src/assets/img/1_1.jpg";
    produits[0].prix=500;
  }

  ngOnInit() {
  }

}
