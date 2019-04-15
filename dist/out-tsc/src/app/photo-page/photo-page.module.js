import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PhotoPagePage } from './photo-page.page';
var routes = [
    {
        path: '',
        component: PhotoPagePage
    }
];
var PhotoPagePageModule = /** @class */ (function () {
    function PhotoPagePageModule() {
    }
    PhotoPagePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PhotoPagePage]
        })
    ], PhotoPagePageModule);
    return PhotoPagePageModule;
}());
export { PhotoPagePageModule };
//# sourceMappingURL=photo-page.module.js.map