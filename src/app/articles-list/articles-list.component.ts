import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-articles-list',
  standalone: false,
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {
  @ViewChild('articleForm') articleForm!: NgForm;

  categories = ['National', 'International', 'Sports and Economy'];
  article: Article = {
    title: '',
    subtitle: '',
    abstract: '',
    body: '',
    category: 'National'
  };
  articles: Article[];
  message = '';

  constructor() {
    this.articles = [
      {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Consectetur adipiscing elit',
        abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        body: '',
        category: 'National'
      },
      {
        title: 'Ut enim ad minim veniam',
        subtitle: 'Quis nostrud exercitation ullamco',
        abstract: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        body: '',
        category: 'International'
      },
      {
        title: 'Duis aute irure dolor',
        subtitle: 'In reprehenderit in voluptate',
        abstract: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        body: '',
        category: 'Sports and Economy'
      }
    ];
  }

  publish(): void {
    if (this.articleForm.invalid) {
      return;
    }

    const article: Article = {
      title: this.article.title,
      subtitle: this.article.subtitle,
      abstract: this.article.abstract,
      body: this.article.body,
      category: this.article.category
    };

    this.articles.push(article);
    this.reset();
    this.message = `The article ${article.title} has been published`;
  }

  reset(): void {
    this.articleForm.reset({
      title: '',
      subtitle: '',
      abstract: '',
      body: '',
      category: this.categories[0]
    });
    this.message = '';
  }
}
