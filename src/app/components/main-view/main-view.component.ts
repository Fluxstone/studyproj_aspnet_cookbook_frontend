import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { CookbookEntryComponent } from '../cookbook-entry/cookbook-entry.component';
import { CookbookEntryModalComponent } from '../cookbook-entry-modal/cookbook-entry-modal.component';
import { getLocalTestData } from '../../../data/debug_getTestData';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    NgFor,
    CookbookEntryComponent, 
    CookbookEntryModalComponent,
    CardModule,
    PanelModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  dishData: any = [];

  ngOnInit(){
    this.loadData();
  }

  loadData(): void{

    try {
      this.dishData = getLocalTestData();
    } catch (error) {
      console.log("Err at fetching: "+error);
      this.dishData = [];
    }
  }
}
