import { MatDialog } from '@angular/material/dialog';
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
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { AssessmentComponent } from './assessment/assessment.component';
import { ResourcesComponent } from './resources/resources.component'
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
    InfocardsComponent,
    SignupComponent,
    RegisterComponent,
    ResultComponent,
    AssessmentComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
