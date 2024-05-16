import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SmoketestService } from '../../services/smoketest.service';

import { CookbookEntryComponent } from '../cookbook-entry/cookbook-entry.component';
import { CookbookEntryModalComponent } from '../cookbook-entry-modal/cookbook-entry-modal.component';
import { getLocalTestData } from '../../../data/debug_getTestData';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    NgFor,
    CookbookEntryComponent, 
    CookbookEntryModalComponent,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    HttpClientModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  dishData: any = [];

  constructor(private smoketestService: SmoketestService){};

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

  debug(): void{
    console.log("Sending a request to the backend");

    this.smoketestService.getSmoketest().subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log("An Error occured inside smoketestService.getSmoketest: "+ error);
      }
    )
  }
}
