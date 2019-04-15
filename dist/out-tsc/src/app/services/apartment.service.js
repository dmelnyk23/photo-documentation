import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ApartmentService = /** @class */ (function () {
    function ApartmentService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44354/api/apartment';
    }
    ApartmentService.prototype.getApartment = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    ApartmentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApartmentService);
    return ApartmentService;
}());
export { ApartmentService };
//# sourceMappingURL=apartment.service.js.map