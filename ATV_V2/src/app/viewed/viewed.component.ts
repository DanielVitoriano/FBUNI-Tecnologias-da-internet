import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewed',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.css']
})
export class ViewedComponent implements OnInit {

  produtos = new Array<{nome: string, preco: number, src: string}>();

  constructor() { }

  ngOnInit(): void {

    this.produtos.push({nome: "Floresta Mítica", preco: 42.99, src: "https://danielvitoriano.github.io/Portfolio/imagens/floresta_mitica.png" });
    this.produtos.push({nome: "Kenny No Breu", preco: 29.90, src: "https://danielvitoriano.github.io/Portfolio/imagens/kennynobreu.png" });
    this.produtos.push({nome: "VISADXS", preco: 24.50, src: "https://danielvitoriano.github.io/Portfolio/imagens/visadxs.PNG" });
    this.produtos.push({nome: "Fruit Hunt", preco: 15, src: "https://danielvitoriano.github.io/Portfolio/imagens/fruithunt.PNG" });
    this.produtos.push({nome: "Nine Hope", preco: 15, src: "https://oceannuscommunity.files.wordpress.com/2016/12/263_gg.jpg" });


  }

  

}
