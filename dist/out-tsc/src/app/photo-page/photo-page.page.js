import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from '../services/photo.service';
import { RoomService } from '../services/room.service';
var PhotoPagePage = /** @class */ (function () {
    function PhotoPagePage(router, location, roomService, photoService) {
        this.router = router;
        this.location = location;
        this.roomService = roomService;
        this.photoService = photoService;
        this.src = 'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Camera-Icon-PNG-715x715.png';
        this.hideButton = false;
        this.showButton = true;
    }
    PhotoPagePage.prototype.backButton = function () {
        this.location.back();
    };
    PhotoPagePage.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.photoService.uploadedPhoto = reader.result.toString();
            console.log(reader.result);
            _this.showButton = false;
            _this.hideButton = true;
        };
    };
    PhotoPagePage.prototype.save = function () {
        this.router.navigateByUrl('/save-photo');
    };
    PhotoPagePage.prototype.ngOnInit = function () {
    };
    PhotoPagePage = tslib_1.__decorate([
        Component({
            selector: 'app-photo-page',
            templateUrl: './photo-page.page.html',
            styleUrls: ['./photo-page.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            RoomService,
            PhotoService])
    ], PhotoPagePage);
    return PhotoPagePage;
}());
export { PhotoPagePage };
//# sourceMappingURL=photo-page.page.js.map