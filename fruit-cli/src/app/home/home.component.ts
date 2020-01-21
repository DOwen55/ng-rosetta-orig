import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userName: string;
  public password: string;

  // Create an instance of the router service.
  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = 'User Name';
    this.password = 'password123';
  }

  // Navigate to the list route.
  public login(): void {
    // Normally, we'd pass the credentials to an authentication service before proceeding.
    // This could be done in the resolver of the next route, or as part of the login process here.
    this.router.navigate(['fruit-list']);
  }

}
