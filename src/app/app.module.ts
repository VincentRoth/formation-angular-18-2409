import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { timeInterceptor } from './shared/time.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnimalModule],
  providers: [provideHttpClient(withInterceptors([timeInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
