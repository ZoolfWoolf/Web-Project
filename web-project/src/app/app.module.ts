import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BannerComponent } from './banner/banner.component';
import { ShareButtonComponent } from './share-button/share-button.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MainpanelComponent } from './mainpanel/mainpanel.component';
import { AdsenseModule } from 'ng2-adsense';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { RelatedskillsComponent } from './relatedskills/relatedskills.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BannerComponent,
    ShareButtonComponent,
    SidenavbarComponent,
    MainpanelComponent,
    MapComponent,
    CoursesComponent,
    CourseComponent,
    MainCourseComponent,
    RelatedskillsComponent,
  ], //We add componants here into the module.
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
    AdsenseModule.forRoot(),
    GoogleMapsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
* A module is simply a set of related componants. Think of a supermarket where we have seperate isles for 
froots, dairy products etc. Those can been seen as modules.
* Each module is responsble for a specific area of the application.
* To use a componant we need to register it in a relevent module.
* This is the default module.
* Go to header.component.ts now to learn how to make a component.
*/
