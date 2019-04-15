import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import {ApiService} from "../core/api.service";
var ListPhotoComponent = /** @class */ (function () {
    function ListPhotoComponent() {
    }
    // photos: Photo[];
    // constructor(private router: Router, private apiService: ApiService) { }
    ListPhotoComponent.prototype.ngOnInit = function () {
        // this.apiService.getPhotos()
        //   .subscribe( data => {
        //     this.photos = data;
        //   });
    };
    ListPhotoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-photo',
            templateUrl: './list-photo.component.html',
            styleUrls: ['./list-photo.component.scss'],
        })
    ], ListPhotoComponent);
    return ListPhotoComponent;
}());
export { ListPhotoComponent };
//# sourceMappingURL=list-photo.component.js.map