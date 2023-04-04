import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { CityComponent } from './pages/home/city/city.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CityComponent, HeroComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
