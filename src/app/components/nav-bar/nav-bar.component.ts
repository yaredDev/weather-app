import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private date;

  constructor() { }

  ngOnInit(): void {
  }


  public get getDate() {
    return new Date
  }


}
