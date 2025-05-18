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
      background-color: #fff;
    border: 1px solid #ddd;
    padding: 1em;
    margin: 0.5em 0;
    text-align: center;
    border-radius: 5px;
    }
    img {
      max-width: 150px;
    margin-bottom: 1em;
    }
  `]
})
export class ProdutoComponent {
  @Input() produto: any;
  @Output() adicionar = new EventEmitter<any>();
}