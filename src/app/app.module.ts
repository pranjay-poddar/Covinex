import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CenterComponent } from './center/center.component';
import { TrackerComponent } from './tracker/tracker.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobeTrackComponent } from './globe-track/globe-track.component';
import { HttpClientModule } from '@angular/common/http';
import { InfocardsComponent } from './infocards/infocards.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnalysisComponent,
    CenterComponent,
    TrackerComponent,
    SigninComponent,
    ContactComponent,
    FooterComponent,
    GlobeTrackComponent,
    InfocardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
