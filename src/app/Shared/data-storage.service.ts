import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipe() {
        const token = this.authService.getToken();
        return this.http.put('https://udemy-ng-http-9e1c7-default-rtdb.firebaseio.com/recipes.json?auth='+ token, this.recipeService.getRecipes());
    }

    // getRecipes() {
    //     this.http.get('').subscribe(
    //         (res: Response) => {
    //             const recipes: Recipe[] = res.json();
    //             this.recipeService.setRecipes(recipes);

    //         }
    //     );
    // }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://udemy-ng-http-9e1c7-default-rtdb.firebaseio.com/recipes.json?auth=' + token)
            .pipe(map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )).subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }


}