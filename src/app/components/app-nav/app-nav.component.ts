import {Component, OnInit} from '@angular/core';
import { navigation } from './../../_main.nav';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html'
})
export class AppNavComponent {
  public navigation = navigation;

  constructor() {
  }

  ngOnInit() {

  }
}

