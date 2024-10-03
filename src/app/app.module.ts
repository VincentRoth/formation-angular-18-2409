import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalModule } from './animal/animal.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { timeInterceptor } from './shared/time.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([timeInterceptor])),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
