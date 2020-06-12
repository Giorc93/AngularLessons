import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenudebarraComponent } from './components/menudebarra/menudebarra.component';
import { AlertComponent } from './components/alert/alert.component';
import { TableComponent } from './components/table/table.component';
import { from } from 'rxjs';
import { CardComponent } from './components/card/card.component';
import { HiglightDirective } from './directives/higlight.directive';
import { ReadDirective } from './directives/read.directive';
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenudebarraComponent,
    AlertComponent,
    TableComponent,
    CardComponent,
    HiglightDirective,
    ReadDirective,
    RepeatDirective,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
