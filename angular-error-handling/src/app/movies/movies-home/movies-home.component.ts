import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
