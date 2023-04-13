import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityComponent } from './pages/home/components/city.component';
import { HomeComponent } from './pages/home/home.component';
import { CapitalPipe } from './shared/pipes/capital.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, CityComponent, CapitalPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
