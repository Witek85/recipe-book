import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
	new Recipe(
		'A Test Recipe', 
		'This is simply a test', 
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/800px-Wiener-Schnitzel02.jpg',
		[
		new Ingredient('Meat',1),
		new Ingredient('Fries',20)
		]),
	new Recipe('A Test Recipe 2', 
		'This is simply a test', 
		'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NYC-Diner-Bacon-Cheeseburger.jpg/800px-NYC-Diner-Bacon-Cheeseburger.jpg',
		[
		new Ingredient('Meat',1),
		new Ingredient('Bun',1)
		])
	];

	getRecipes() {
		return this.recipes.slice();
	}
}