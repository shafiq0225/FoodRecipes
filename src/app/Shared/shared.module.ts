import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directives";

@NgModule({
    declarations: [DropdownDirective],   
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule {

}