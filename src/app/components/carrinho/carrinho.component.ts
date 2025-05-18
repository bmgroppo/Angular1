import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Corrigido o local de importação

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],  // Agora está correto
  template: `
    <aside class="carrinho">
      <h2>Carrinho ({{ itens.length }})</h2>
      <ul>
        @for (item of itens; track item.nome) {
          <li>
            {{ item.nome }} - R$ {{ item.preco }},00
            <button (click)="removerItem(item)">🗑️</button>
          </li>
        }
      </ul>
      <p class="total">Total: R$ {{ total }},00</p>
    </aside>
  `,
  styles: [`
    .carrinho {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
    .total {
      font-weight: bold;
      border-top: 1px solid #ddd;
      padding-top: 10px;
    }
  `]
})
export class CarrinhoComponent {
  itens: any[] = [];
  total = 0;

  adicionarItem(produto: any) {
    this.itens.push(produto);
    this.total += produto.preco;
  }

  removerItem(produto: any) {
    this.itens = this.itens.filter(item => item !== produto);
    this.total -= produto.preco;
  }
}