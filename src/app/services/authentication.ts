import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUser: any;
    constructor(private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('wyreuser')) || null;
    }

    public get currentUserData() {
        return this.currentUser;
    }

}