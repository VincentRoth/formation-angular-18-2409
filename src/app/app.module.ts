import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { timeInterceptor } from './shared/time.interceptor';
import { VetModule } from './vet/vet.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AnimalModule, VetModule],
  providers: [provideHttpClient(withInterceptors([timeInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
