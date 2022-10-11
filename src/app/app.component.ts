import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Good evening!';
  appBody = 'Hello, my friends!';

  handleOk(message: string): void {
    console.log(message);
  }
}
