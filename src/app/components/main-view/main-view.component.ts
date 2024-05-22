import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FetchAllDishesService } from '../../services/fetchAllDishes.service';

import { CookbookEntryComponent } from '../cookbook-entry/cookbook-entry.component';
import { CookbookEntryModalComponent } from '../cookbook-entry-modal/cookbook-entry-modal.component';
//import { getLocalTestData } from '../../../data/debug_getTestData';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';

import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    CookbookEntryComponent, 
    CookbookEntryModalComponent,
    PanelModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    HttpClientModule,
    DialogModule,
    InputNumberModule,
    EditorModule,
    DividerModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  dishData: any = [];
  visible: boolean = false;

  constructor(private fetchAllDishesService: FetchAllDishesService){};

  ngOnInit(){
    this.loadData();
  }

  loadData(): void{
    this.fetchAllDishesService.getAllDishes().subscribe(
      (result) => {
        try {
          this.dishData = JSON.parse(result);
        } catch (error) {
          console.log("Err at fetching: "+error);
          this.dishData = [];
        }
      },
      (error) => {
        console.log("An Error occured inside fetchAllDishesService.getAllDishes(): "+ error);
      }
    );
  }

  showDialog(): void{
    this.visible = true;
  }

  /**
   * Modal
   */

  dish_title: string = "";
  dish_cookingTime: number = 0;
  dish_image: string = "";
  dish_description: string = "";
  dish_ingredients: Array<string> = [];
  dish_steps: Array<string> = [];


  addIngredientField():void{}
  removeIngredientField():void{}
  submitEntry():void{}
}