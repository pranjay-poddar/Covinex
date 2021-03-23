import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TrackerComponent } from './tracker/tracker.component';
import { SigninComponent } from './signin/signin.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { CenterComponent } from './center/center.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'center', component: CenterComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'tracker', component: TrackerComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, CenterComponent, AnalysisComponent,TrackerComponent,SigninComponent,ContactComponent,FooterComponent];