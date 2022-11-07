import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemtemListComponent } from './temtem-list.component';

describe('TemtemListComponent', () => {
  let component: TemtemListComponent;
  let fixture: ComponentFixture<TemtemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemtemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemtemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
