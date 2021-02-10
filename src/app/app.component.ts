import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  loadedFeature ='recipes'

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDj4zpTKHZnAlkg24tA3D4FTpPkMWVeil0",            
      authDomain: "udemy-ng-http.firebaseapp.com"
    });

  }
  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }

}


