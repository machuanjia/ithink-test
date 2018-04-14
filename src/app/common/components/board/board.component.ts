import {Component, Input, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class AppBoardComponent {

  @HostBinding('class') hostClass = 'app-board-layout';

  @HostListener('contextmenu')
  onContextmenu() {
    return false;
  }
}

