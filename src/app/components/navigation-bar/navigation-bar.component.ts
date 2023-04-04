import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  onClick(id: string) {
    const elements = document.querySelectorAll('li');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }

    const itemSelected = document.getElementById(id);
    itemSelected?.classList.add('active');
  }
}
