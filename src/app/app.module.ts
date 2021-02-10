import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModulue} from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './Shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipeModule } from './recipes/recipe.module';
import { SharedModule } from './Shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModulue,      
    HttpModule,    
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
