import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BuildingService } from '../services/building.service';
import { AlertController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(router, userService, buildingService, alertController) {
        this.router = router;
        this.userService = userService;
        this.buildingService = buildingService;
        this.alertController = alertController;
        this.hideInputs = false;
    }
    HomePage.prototype.emptyDataAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: 'Somethings went wrong. Try again later!',
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
    HomePage.prototype.getBuildings = function () {
        var _this = this;
        this.buildingService.getBuildings().subscribe(function (data) {
            if (data != null) {
                _this.buildingService.buildings = data;
                _this.router.navigateByUrl('/location');
                _this.hideInputs = false;
            }
            else {
                _this.emptyDataAlert();
                _this.hideInputs = false;
            }
        });
    };
    HomePage.prototype.photoButton = function () {
        this.hideInputs = true;
        this.getBuildings();
    };
    HomePage.prototype.exitButton = function () {
        this.router.navigateByUrl('/login');
        this.userService.user = null;
        this.buildingService.buildings = null;
    };
    HomePage.prototype.ngOnInit = function () {
        this.src = this.userService.user.photo;
        console.log(this.userService.user.photo);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            UserService,
            BuildingService,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map