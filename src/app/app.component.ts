import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   emails: any[] = [
    {email: 'Bill@Gates.com', importance: true, subject: 'I am giving you money', content: 'just kidding'},
    {email: 'Jessica@Alba.com', importance: true, subject: 'I want to date you', content: 'i am super serious'},
    {email: 'Kobe@Bryant.com', importance: false, subject: 'Work harder', content: 'you suck at basketball'},
    {email: 'Michael@Choi.com', importance: false, subject: 'good job', content: 'you are doing great!'}
  ]
}
