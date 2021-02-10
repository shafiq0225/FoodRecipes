import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../Shared/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipe()
        .subscribe(
            (res : Response) => {
                console.log(res)
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes(); 
    }

    onLogout() {
        this.authService.logout();
    }

   
}