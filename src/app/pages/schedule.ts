import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  imports: [RouterLink],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
})
export class Schedule implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Schedule & Fees - Kalander, George');
  }
}
