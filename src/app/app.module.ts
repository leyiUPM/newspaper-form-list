import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ArticlesListModule } from './articles-list/articles-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArticlesListModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
