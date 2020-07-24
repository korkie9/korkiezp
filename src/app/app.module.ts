import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment, firebaseConfig } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TechSupportComponent } from './pages/tech-support/tech-support.component';
import { BannerComponent } from './components/banner/banner.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreStructuresComponent } from './components/core-structures/core-structures.component';
import { MaterialModule } from './modules/material/material.module';
import { CoreStructuresCardComponent } from './components/core-structures-card/core-structures-card.component';
import { StructuresCardComponent } from './components/structures-card/structures-card.component';
import { TechComponent } from './pages/tech/tech.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TechSupportComponent,
    BannerComponent,
    DashboardComponent,
    AdminComponent,
    CoreStructuresComponent,
    CoreStructuresCardComponent,
    StructuresCardComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, BrowserAnimationsModule, // storage
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
