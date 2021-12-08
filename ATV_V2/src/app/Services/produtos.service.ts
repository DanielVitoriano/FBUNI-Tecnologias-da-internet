import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  public produtos = new Array<produto>();
  qtDeProdutos: number = 0;

  constructor() {

    this.produtos.push(new produto("Floresta Mítica", 42.99, "https://danielvitoriano.github.io/Portfolio/imagens/floresta_mitica.png"));
    this.produtos.push(new produto("Kenny No Breu", 29.90, "https://danielvitoriano.github.io/Portfolio/imagens/kennynobreu.png"));
    this.produtos.push(new produto("VISADXS", 24.50, "https://danielvitoriano.github.io/Portfolio/imagens/visadxs.PNG"));
    this.produtos.push(new produto("Nine Hope", 15, "https://oceannuscommunity.files.wordpress.com/2016/12/263_gg.jpg"));
    
    this.atualizar();
   }

   getProdutos(){
     return this.produtos;
   }

   getQtdProdutos(){
     return this.qtDeProdutos;
   }

   addNovoProduto(nome: string, preco: number, src: string){
     let novoProduto = {nome, preco, src};
     this.produtos.push(novoProduto);
     this.atualizar();
   }

   public atualizar(){
     this.qtDeProdutos = this.produtos.length;
   }

   editarProduto(index: number, nome: string, preco: number, src: string){
    this.produtos[index].nome = nome;
    this.produtos[index].preco = preco;
    this.produtos[index].src = src;
   }
   excluirProduto(index: number){
/*     this.produtos[index].nome = "";
    this.produtos[index].preco = 0;
    this.produtos[index].src = ""; */
    this.produtos.splice(index,1);
    this.atualizar();
    alert("Produto excluido com sucesso, mas nem tanto!");
   }

}

class produto{
  nome: string;
  preco: number;
  src: string;

  constructor(nome:string, preco: number, src: string){
    this.nome = nome;
    this.preco = preco;
    this.src = src;
  }


}
