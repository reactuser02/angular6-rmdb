import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FourColGridComponent } from './four-col-grid/four-col-grid.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadMoreBtnComponent } from './load-more-btn/load-more-btn.component';
import { MovieThumbComponent } from './movie-thumb/movie-thumb.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieInfoBarComponent } from './movie-info-bar/movie-info-bar.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    HeaderComponent,
    HeroImageComponent,
    SearchBarComponent,
    FourColGridComponent,
    SpinnerComponent,
    LoadMoreBtnComponent,
    MovieThumbComponent,
    NavigationComponent,
    MovieInfoComponent,
    MovieInfoBarComponent,
    ActorComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
