import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="produto">
      <img [src]="'assets/images/' + produto.imagem" [alt]="produto.nome">
      <h3>{{ produto.nome }}</h3>
      <p>R$ {{ produto.preco }},00</p>
      <button (click)="adicionar.emit(produto)">
        Adicionar ao carrinho
      </button>
    </div>
  `,
  styles: [`
    .produto {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px;
      text-align: center;
    }
    img {
      max-width: 150px;
    }
  `]
})
export class ProdutoComponent {
  @Input() produto: any;
  @Output() adicionar = new EventEmitter<any>();
}