import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-produtos-list',
  standalone: true,
  imports: [CommonModule, ProdutoComponent],
  template: `
    <section class="lista-produtos">
      <h2>Nossas Roupas</h2>
      <div class="grade-produtos">
        @for (produto of produtos; track produto.nome) {
          <app-produto 
            [produto]="produto"
            (adicionar)="onAdicionarAoCarrinho($event)">
          </app-produto>
        }
      </div>
    </section>
  `,
  styles: [`
    .grade-produtos {
      flex: 3;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    }
  `]
})
export class ProdutosListComponent {
  produtos = [
  { nome: 'Camisa Social', preco: 50, imagem:'camisa.webp' },
  { nome: 'Calça Jeans', preco: 120, imagem: 'Calça.jpeg' },
  { nome: 'Tênis Esportivo', preco: 200, imagem: 'Tenis.webp' }
  ];

  @Output() itemAdicionado = new EventEmitter<any>();

  onAdicionarAoCarrinho(produto: any) {
    this.itemAdicionado.emit(produto);
  }
}