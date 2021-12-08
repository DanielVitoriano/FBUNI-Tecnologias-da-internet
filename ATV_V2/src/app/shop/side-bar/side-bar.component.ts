import { Component, OnInit } from '@angular/core';
import { ProdutosService } from "src/app/Services/produtos.service"

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  produtosService:ProdutosService

  nome: string = "";
  preco: number = 0;
  src: string = "";

  constructor(_produtosServic: ProdutosService) {
      this.produtosService = _produtosServic;
   }

  ngOnInit(): void {
  }

  addNovoProduto(){
    if(this.nome === "") alert("Insira o nome do produto!");
    else if(this.preco <= 0) alert("Insira o preço!");
    else if(this.src === "") alert("Insira a URL da imagem!");
    else{
      this.produtosService.addNovoProduto(this.nome, this.preco, this.src);

      this.nome = "";
      this.preco = 0;
      this.src = "";
    }
  }

}
