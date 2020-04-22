import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import bootstrap from "bootstrap";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
// import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

//auth service social login config
// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//     [
//       {
//         id: FacebookLoginProvider.PROVIDER_ID,
//         provider: new FacebookLoginProvider("2893786697368668")
//       },
//       {
//         id: GoogleLoginProvider.PROVIDER_ID,
//         provider: new GoogleLoginProvider("288191163185-rh55jk34kplkk9e2v04hu5mae57t751s.apps.googleusercontent.com")
//       }
//     ]
//   );
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
    // SocialLoginModule
  ],
  providers: [
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: getAuthServiceConfigs
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
