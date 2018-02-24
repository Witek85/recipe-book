import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
