import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',    // The name of the component is app-navbar
  templateUrl: './navbar.component.html',   // link of the component
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
