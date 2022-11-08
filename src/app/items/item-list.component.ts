import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iitem } from './iitem';
import { ItemService } from './item.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  constructor(private itemService: ItemService) {}
  pageTitle = 'Items';
  imageWidth: number = 50;
  imageMargin: number = 2;
  sub!: Subscription;
  items: Iitem[] = [];

  ngOnInit(): void {
    this.sub = this.itemService.getItems().subscribe({
      next: (items) => {
        this.items = items;
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
