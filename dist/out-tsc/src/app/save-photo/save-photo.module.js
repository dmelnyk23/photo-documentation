import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SavePhotoPage } from './save-photo.page';
var routes = [
    {
        path: '',
        component: SavePhotoPage
    }
];
var SavePhotoPageModule = /** @class */ (function () {
    function SavePhotoPageModule() {
    }
    SavePhotoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [SavePhotoPage]
        })
    ], SavePhotoPageModule);
    return SavePhotoPageModule;
}());
export { SavePhotoPageModule };
//# sourceMappingURL=save-photo.module.js.map