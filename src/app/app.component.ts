//  JS transformed into something that look like Java and C++
// this is a TS file => typeScript 

import { Component } from '@angular/core';

@Component({
  selector: 'app-test',     // main component 
  templateUrl: './app.component.html',    // URL of html file 
  styleUrls: ['./app.component.css']    // all css files and Sass files will be here 
})
export class AppComponent {
  title = 'test';
}
