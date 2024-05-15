import { Component } from '@angular/core';

import { CookbookEntryComponent } from '../cookbook-entry/cookbook-entry.component';
import { CookbookEntryModalComponent } from '../cookbook-entry-modal/cookbook-entry-modal.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CookbookEntryComponent, CookbookEntryModalComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
