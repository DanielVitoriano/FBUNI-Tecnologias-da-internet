import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ProdutosService } from "src/app/Services/produtos.service"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  modal: boolean = false;
  index: number = -1;
  nome: string = "";
  preco: number = 0;
  src: string = "";

  produtosService:ProdutosService

  constructor(_produtosService:ProdutosService) {
    this.produtosService = _produtosService;
   } 

  ngOnInit(): void {
  }

  clickModal(){
    if(this.modal) {this.modal = false;}
    else {this.modal = true;}
  }

  pegarProduto(nome: string){
    for(let x = 0; x < this.produtosService.getQtdProdutos(); x++){
      if(this.produtosService.produtos[x].nome === nome){
        this.nome = this.produtosService.produtos[x].nome;
        this.preco = this.produtosService.produtos[x].preco;
        this.src = this.produtosService.produtos[x].src;

        this.index = x;
      }
    }
  }

  editarProduto(){
    this.produtosService.editarProduto(this.index, this.nome, this.preco, this.src);
  }
  excluirProduto(){
    this.produtosService.excluirProduto(this.index);
  }
}
