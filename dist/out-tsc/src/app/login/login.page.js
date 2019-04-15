import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, alertController, userService) {
        this.router = router;
        this.alertController = alertController;
        this.userService = userService;
        this.hideInputs = false;
    }
    LoginPage.prototype.emptyDataAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: 'Check input data',
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
    LoginPage.prototype.checkUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hideInputs = true;
                        return [4 /*yield*/, this.userService.getUser(this.login, this.password).subscribe(function (data) {
                                if (data !== null) {
                                    _this.router.navigateByUrl('/home');
                                    _this.userService.user = data;
                                    _this.login = undefined;
                                    _this.password = undefined;
                                    _this.hideInputs = false;
                                }
                                else {
                                    _this.hideInputs = false;
                                    _this.emptyDataAlert();
                                    _this.login = undefined;
                                    _this.password = undefined;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signIn = function () {
        if (this.login !== undefined && this.password !== undefined &&
            this.login !== '' && this.password !== '') {
            this.checkUser();
        }
        else {
            this.emptyDataAlert();
        }
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AlertController,
            UserService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map