import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `<div>
    <!-- News component template goes here -->
    <h2>News Component</h2>
  </div>`,
  styles: [`
    /* News component styles go here */
    h2 { color: #2c3e50; }
  `]
})
export class NewsComponent implements OnInit {
  searchQuery: string = '';
  selectedCategory: string = '';
  categories: string[] = [];
  filteredNewsGroups: any[][] = [];
  filteredCurrentNewsIndex: number = 0;
  filteredMaxNewsIndex: number = 0;

  constructor() {}

  ngOnInit() {
    // Initialize your data here
    this.categories = ['category1', 'category2', 'category3']; // แทนที่ด้วย categories จริง
    this.filteredNewsGroups = []; // Initialize with your news data
    this.updateMaxIndex();
  }

  onSearchChange() {
    this.filterNews();
  }

  onCategoryChange() {
    this.filterNews();
  }

  filterNews() {
    // Implement your filtering logic
    this.filteredCurrentNewsIndex = 0;
    this.updateMaxIndex();
  }

  updateMaxIndex() {
    this.filteredMaxNewsIndex = this.filteredNewsGroups.length - 1;
  }

  previousFilteredNews() {
    if (this.filteredCurrentNewsIndex > 0) {
      this.filteredCurrentNewsIndex--;
    }
  }

  nextFilteredNews() {
    if (this.filteredCurrentNewsIndex < this.filteredMaxNewsIndex) {
      this.filteredCurrentNewsIndex++;
    }
  }

  goToFilteredNewsSlide(index: number) {
    this.filteredCurrentNewsIndex = index;
  }

  openNewsDetail(news: any) {
    // Implement news detail navigation
  }

  formatDate(date: string | Date): { day: string, month: string } | null {
    if (!date) return null;
    const d = new Date(date);
    return {
      day: d.getDate().toString().padStart(2, '0'),
      month: (d.getMonth() + 1).toString().padStart(2, '0')
    };
  }
}