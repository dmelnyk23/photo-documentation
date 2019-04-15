import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from '../services/photo.service';
import { RoomService } from '../services/room.service';
var SavePhotoPage = /** @class */ (function () {
    function SavePhotoPage(router, location, route, photoService, roomService) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.photoService = photoService;
        this.roomService = roomService;
        this.address = '';
        this.description = '';
        this.mangeltypChoice = '';
        this.gewerkChoice = '';
        this.MangelprozessStarten = false;
    }
    SavePhotoPage.prototype.backButton = function () {
        this.location.back();
    };
    SavePhotoPage.prototype.savePhoto = function () {
        console.log("click");
        this.photoService.photoToSave.address = this.roomService.choosenRoom.address;
        this.photoService.photoToSave.photo = this.photoService.uploadedPhoto;
        this.photoService.photoToSave.gewerk = this.gewerkChoice;
        this.photoService.photoToSave.mangeltyp = this.mangeltypChoice;
        this.photoService.photoToSave.description = this.description;
        this.MangelprozessStarten ? this.photoService.photoToSave.mangelprozessStarten = 'Yes' :
            this.photoService.photoToSave.mangelprozessStarten = 'No';
        this.photoService.savePhoto().subscribe(function (data) {
            console.log(data);
        });
    };
    SavePhotoPage.prototype.ngOnInit = function () {
    };
    SavePhotoPage.prototype.exitButton = function () {
        this.router.navigateByUrl('/home');
    };
    SavePhotoPage = tslib_1.__decorate([
        Component({
            selector: 'app-save-photo',
            templateUrl: './save-photo.page.html',
            styleUrls: ['./save-photo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            ActivatedRoute,
            PhotoService,
            RoomService])
    ], SavePhotoPage);
    return SavePhotoPage;
}());
export { SavePhotoPage };
//# sourceMappingURL=save-photo.page.js.map