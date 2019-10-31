import { Component, OnInit } from '@angular/core';
import { OpenService } from '@core/open.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories$ = this.openService.categories();

  constructor(
    private openService: OpenService,
  ) { }

  ngOnInit() {
  }

  get count() {
    return this.openService.count;
  }

  add() {
    this.openService.add();
  }

}
