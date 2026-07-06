import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('About Us - Kalander Learning Centre, George');
  }
}
