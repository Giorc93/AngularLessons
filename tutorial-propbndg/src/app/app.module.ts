import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ElementsModule } from './modules/elements/elements.module';
import { TestpipePipe } from './pipes/testpipe.pipe';

import { AppComponent } from './app.component';
import { ArtlistComponent } from './artlist/artlist.component';
import { RequestComponent } from './components/request/request.component';
import { Service1Component } from './components/service1/service1.component';
import { Service2Component } from './components/service2/service2.component';
import { PipetestComponent } from './components/pipetest/pipetest.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtlistComponent,
    RequestComponent,
    Service1Component,
    Service2Component,
    PipetestComponent,
    TestpipePipe,
  ],
  imports: [BrowserModule, ElementsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
