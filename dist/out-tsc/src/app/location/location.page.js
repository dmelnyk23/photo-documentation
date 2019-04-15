import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { BuildingService } from '../services/building.service';
import { FloorService } from '../services/floor.service';
import { ApartmentService } from '../services/apartment.service';
import { RoomService } from '../services/room.service';
var LocationPage = /** @class */ (function () {
    function LocationPage(router, location, buildingService, floorService, apartmentService, roomService, alertController) {
        this.router = router;
        this.location = location;
        this.buildingService = buildingService;
        this.floorService = floorService;
        this.apartmentService = apartmentService;
        this.roomService = roomService;
        this.alertController = alertController;
        this.pageNavigation = 'Location';
        this.hideInputs = false;
    }
    LocationPage.prototype.getBuildings = function () {
        this.buildings = this.buildingService.buildings;
    };
    LocationPage.prototype.ngOnInit = function () {
        this.getBuildings();
        this.dataToShow = this.buildings;
    };
    LocationPage.prototype.getFloors = function (id, info, type) {
        var _this = this;
        this.hideInputs = true;
        this.floorService.getFloor(id).subscribe(function (data) {
            if (data != null) {
                _this.floorService.floors = data;
                _this.floors = _this.floorService.floors;
                _this.dataToShow = _this.floors;
                _this.pageNavigation = info;
                _this.returnPath = _this.floors[0].type;
                _this.hideInputs = false;
            }
            else if (data === null) {
                _this.hideInputs = false;
                _this.emptyLocationAlert();
            }
        });
    };
    LocationPage.prototype.getApartments = function (id, info, type) {
        var _this = this;
        this.hideInputs = true;
        this.apartmentService.getApartment(id).subscribe(function (data) {
            if (data != null) {
                _this.apartmentService.apartments = data;
                _this.apartments = _this.apartmentService.apartments;
                _this.dataToShow = _this.apartments;
                _this.pageNavigation = info;
                _this.returnPath = _this.apartments[0].type;
                _this.hideInputs = false;
            }
            else if (data === null) {
                _this.hideInputs = false;
                _this.emptyLocationAlert();
            }
        });
    };
    LocationPage.prototype.getRooms = function (id, info, type) {
        var _this = this;
        this.hideInputs = true;
        this.roomService.getRooms(id).subscribe(function (data) {
            if (data != null) {
                _this.roomService.rooms = data;
                _this.rooms = _this.roomService.rooms;
                _this.dataToShow = _this.rooms;
                _this.pageNavigation = info;
                _this.returnPath = _this.rooms[0].type;
                _this.hideInputs = false;
            }
            else if (data === null) {
                _this.hideInputs = false;
                _this.emptyLocationAlert();
            }
        });
    };
    LocationPage.prototype.locationButtonClick = function (data) {
        switch (data.type) {
            case 'Building':
                this.getFloors(data.id, data.info, data.type);
                break;
            case 'Floor':
                this.getApartments(data.id, data.info, data.type);
                break;
            case 'Apartment':
                this.getRooms(data.id, data.info, data.type);
                break;
            case 'Room':
                console.log(data.id);
                this.roomService.getChoosenRoom(data.id);
                console.log(this.roomService.choosenRoom);
                this.router.navigateByUrl('/photo-page');
                break;
        }
    };
    LocationPage.prototype.backButton = function (backFrom) {
        switch (backFrom) {
            case 'Floor':
                this.pageNavigation = 'Location';
                this.returnPath = '';
                this.dataToShow = this.buildings;
                break;
            case 'Apartment':
                this.dataToShow = this.floors;
                this.returnPath = this.dataToShow[0].type;
                this.pageNavigation = 'Building ' + this.dataToShow[0].buildingID;
                break;
            case 'Room':
                this.dataToShow = this.apartments;
                this.returnPath = this.dataToShow[0].type;
                this.pageNavigation = 'Floor ' + this.dataToShow[0].floorID;
                break;
            default:
                this.location.back();
                break;
        }
    };
    LocationPage.prototype.emptyLocationAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: "This " + this.dataToShow[0].type + " is empty!",
                            buttons: ['OK'],
                            translucent: false
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationPage = tslib_1.__decorate([
        Component({
            selector: 'app-location',
            templateUrl: './location.page.html',
            styleUrls: ['./location.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            Location,
            BuildingService,
            FloorService,
            ApartmentService,
            RoomService,
            AlertController])
    ], LocationPage);
    return LocationPage;
}());
export { LocationPage };
//# sourceMappingURL=location.page.js.map