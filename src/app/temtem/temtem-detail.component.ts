import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITemTem } from './ITemTem';
import { TemtemService } from './temtem.service.service';

@Component({
  selector: 'client-temtem-detail',
  templateUrl: './temtem-detail.component.html',
  styleUrls: ['./temtem-detail.component.css'],
})
export class TemtemDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private temtemService: TemtemService
  ) {}
  public pageTitle = 'TemTem Detail';
  temtem: ITemTem | undefined;
  errorMessage: string = '';
  imageWidth: number = 300;
  imageHeight: number = 300;
  imageMargin: number = 20;

  ngOnInit(): void {
    const number = Number(this.route.snapshot.paramMap.get('number'));
    if (number) {
      this.getTemTem(number);
    }
  }

  getTemTem(number: number): void {
    this.temtemService.getTemTemByNumber(number).subscribe({
      next: (temtem) => (this.temtem = temtem),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/temtems']);
  }
}
