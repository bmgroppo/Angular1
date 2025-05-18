import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itens: any[] = [];  // Lista de itens no carrinho
  total = 0;          // Total do carrinho

  // Adicione este método:
  adicionarItem(produto: any) {
    this.itens.push(produto);
    this.total += produto.preco;
  }

  removerItem(index: number) {
    const itemRemovido = this.itens.splice(index, 1)[0];
    this.total -= itemRemovido.preco;
  }
}