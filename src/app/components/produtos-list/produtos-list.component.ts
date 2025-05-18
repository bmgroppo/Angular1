import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [CommonModule, ProdutoComponent],
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent {
  produtos = [
    { nome: 'Camisa social', preco: 50, imagem: 'assets/images/camisa.webp' },
    { nome: 'Calça Jeans', preco: 120, imagem: 'assets/images/calca.jpeg' },
    { nome: 'Tênis social', preco: 200, imagem: 'assets/images/tenis.webp' }
  ];

  @Output() itemAdicionado = new EventEmitter<any>();

  onAdicionarAoCarrinho(produto: any) {
    this.itemAdicionado.emit(produto);
  }
}