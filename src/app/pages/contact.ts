import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Contact Us - Kalander, George');
  }
}
