import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { CityComponent } from './pages/home/components/city.component';
import { HomeComponent } from './pages/home/home.component';
import { CapitalPipe } from './shared/pipes/capital.pipe';
import { HeroService } from './shared/services/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    CapitalPipe,
    HeroComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
