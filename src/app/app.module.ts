import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';//Slideshow
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product.service';
import { LoginService } from './service/login.service';
import { RegisterComponent } from './register/register.component';
import { RouteModule }  from './route/route.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';//Reactive Form Module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MainComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SlideshowModule,
    RouteModule,
    ReactiveFormsModule //load module
  ],
  providers: [ProductService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
