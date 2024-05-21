import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  onFavoriteChange(event: { newValue: boolean }) {
    console.log('Favorite changed:', event.newValue);
    // Additional logic here
  }
}
