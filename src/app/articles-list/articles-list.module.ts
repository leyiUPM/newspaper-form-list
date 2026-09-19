import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesListComponent } from './articles-list.component';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [ArticlesListComponent, HighlightDirective],
  imports: [CommonModule, FormsModule],
  exports: [ArticlesListComponent]
})
export class ArticlesListModule {}
