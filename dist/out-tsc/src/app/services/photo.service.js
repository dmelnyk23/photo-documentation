import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from "../models/photo.model";
var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.photoToSave = new Photo();
        this.baseUrl = 'https://localhost:44354/api/photo';
    }
    // getPhotos() {
    //   return this.http.get<Photo[]>(this.baseUrl);
    // }
    PhotoService.prototype.getPhotos = function () {
        return this.http.get(this.baseUrl);
    };
    PhotoService.prototype.savePhoto = function () {
        return this.http.put(this.baseUrl, this.photoToSave);
    };
    PhotoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PhotoService);
    return PhotoService;
}());
export { PhotoService };
//# sourceMappingURL=photo.service.js.map