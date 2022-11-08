import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemtemListComponent } from './temtem/temtem-list.component';
import { TemtemDetailComponent } from './temtem/temtem-detail.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './items/item-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemtemListComponent,
    TemtemDetailComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'temtems', component: TemtemListComponent },
      { path: 'temtems/:number', component: TemtemDetailComponent },
      { path: 'items', component: ItemListComponent },
      { path: '', redirectTo: 'temtems', pathMatch: 'full' }, // sets the default path to temtem-list (first page routes to this)
      { path: '**', redirectTo: 'temtems', pathMatch: 'full'} // wild-card path--usually used to handle 404s and the like
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
