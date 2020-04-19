import { Component, OnInit } from '@angular/core';
// import { AuthService } from "angularx-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }

  isLoginVisible;
  isSignupVisible;
  currentUser = {};
  isDataLoading:any = false;
  socialSignInUserData;


  ngOnInit() {
    this.isLoginVisible = true;
  }

  visibleSignUp(){
    this.isSignupVisible = true
    this.isLoginVisible = false
  }

  visibleLogin(){
    this.isSignupVisible = false
    this.isLoginVisible = true
  }



  public socialSignIn(socialPlatform : string) {
    console.log('socialPlatform: ', socialPlatform);



      this.isDataLoading = false;
      let socialPlatformProvider;
          // if(socialPlatform == "facebook"){
          //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
          // }else if(socialPlatform == "google"){
          //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
          // } 
          var thisVar = this;
          // this.socialAuthService.signIn(socialPlatformProvider).then(
          //   (userData) => {
          //     console.log('userData: ', userData);
              
          //     // // console.table(userData);
              
          //     // var body = {
          //     //   email : userData.email,
          //     //   id : userData.id,
          //     //   name : userData.name,
          //     //   provider : userData.provider,
          //     //   token : userData.token,
          //     //   image : userData.image
          //     // }
          //     // if(socialPlatform == "google"){
          //     //   body['token'] = userData.idToken;
          //     // }
          //     // var toogleAlert;
          //     // if(socialPlatform == "facebook" && body.email =='' || body.email == undefined){
          //     //   thisVar.userService.showAlert('We did not receive an email address from Facebook, in order for you to sign up and use the unsyned.us web portal we will need an email address. Please attempt to connect with Facebook again or try connecting with a Google account.', 'failed');
          //     //   this.socialAuthService.signOut().then( () => {
          //     //   });
          //     // } 
          //     // else {
          //     //   thisVar.userService.showToogleAlert('Processing', 'process','init',(res)=>{
          //     //     toogleAlert = res;
          //     //   });
                
          //     //   thisVar.api.socialLogin(body).subscribe(
          //     //     data => {
                    
          //     //       // console.table(data);
                    
          //     //       if (data['code'] == 200) {
          //     //         localStorage.setItem('wyreuser', JSON.stringify(data['data']));
          //     //         toogleAlert.componentInstance.subtype = 'done';
          //     //         toogleAlert.componentInstance.title = 'Done';
          //     //         setTimeout(function () {
          //     //           toogleAlert.close();
          //     //         }, 2000);
          //     //         thisVar.router.navigate(['/dashboard']);
          //     //       } else {
          //     //         this.socialAuthService.signOut().then( () => {
          //     //         });
          //     //         toogleAlert.componentInstance.subtype = 'failed';
          //     //         toogleAlert.componentInstance.title = data['msg'];
          //     //         setTimeout(function () {
          //     //           toogleAlert.close();
          //     //         }, 3000);
          //     //       }
          //     //     },
          //     //     error => {
          //     //       this.socialAuthService.signOut().then( () => {
          //     //       });
          //     //       toogleAlert.componentInstance.subtype = 'failed';
          //     //       toogleAlert.componentInstance.title = 'Failed to reach server';
          //     //       setTimeout(function () {
          //     //           toogleAlert.close();
          //     //       }, 3000);
          //     //       return error;
          //     //     }
          //     //   );
          //     // }   
          //   }
          // );

    
  }



}
