import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  teste: string = "olá tudo bem?";
  email = "teste@teste.com";
  emailEnviado = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitNewsLetter(){
    this.teste = "tudo sim ;)";
    this.emailEnviado = true;
  }
  onEmailEnter(event: Event){
    this.email = (<HTMLInputElement>event.target).value;
  }

}
