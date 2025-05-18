import { Component } from '@angular/core';
import { ProdutosListComponent } from './components/produtos-list/produtos-list.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProdutosListComponent, CarrinhoComponent],
  template: `
    <header>
      <h1>Loja de Roupas</h1>
    </header>
    <main>
      <app-produtos-list (itemAdicionado)="carrinho.adicionarItem($event)"></app-produtos-list>
      <app-carrinho #carrinho></app-carrinho>
    </main>
  `,
  styles: [`
    main { 
      display: flex; 
      padding: 20px;
      gap: 20px;
    }
    header {
      background: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
    }
  `]
})
export class AppComponent {}