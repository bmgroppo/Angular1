import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto',
  template: `
    <div class="product">
      <h3>{{produto.nome}}</h3>
      <p>R$ {{produto.preco}}</p>
      <button (click)="adicionar()">Adicionar ao carrinho</button>
    </div>
  `,
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() produto: any;
  @Output() adicionarAoCarrinho = new EventEmitter<any>();

  adicionar() {
    this.adicionarAoCarrinho.emit(this.produto);
  }
}