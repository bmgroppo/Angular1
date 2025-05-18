import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent {
  produtos = [
    { nome: 'Camisa social', preco: 50, imagem: 'camisa.webp' },
    { nome: 'Calça Jeans', preco: 120, imagem: 'Calça.jpeg' },
    { nome: 'Tênis social', preco: 200, imagem: 'Tenis.webp' }
  ];

  @Output() itemAdicionado = new EventEmitter<any>();

  adicionarAoCarrinho(produto: any) {
    this.itemAdicionado.emit(produto);
  }
}