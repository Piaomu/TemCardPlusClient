import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITemTem } from './ITemTem';
import { TemtemService } from './temtem.service.service';

@Component({
  templateUrl: './temtem-list.component.html',
  styleUrls: ['./temtem-list.component.css'],
})
export class TemtemListComponent implements OnInit, OnDestroy {
  constructor(private temtemService: TemtemService) {}
  pageTitle = 'TemTem';
  portraitWidth: number = 50;
  portraitMargin: number = 2;
  sub!: Subscription;
  private _listFilter: string = 'mimit';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredTemTems = this.performFilter(value);
  }

  temTems: ITemTem[] = [];
  filteredTemTems: ITemTem[] = [];

  performFilter(filterBy: string): ITemTem[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.temTems.filter((temTem: ITemTem) =>
      temTem.name.toLocaleLowerCase().includes(filterBy)
    );
  }
  ngOnInit(): void {
    this.sub = this.temtemService.getTemTems().subscribe({
      next: (temtems) => {
        this.temTems = temtems;
        this.filteredTemTems = temtems;
      },
    });
    this.listFilter = 'temtem';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
