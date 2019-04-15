import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var FloorService = /** @class */ (function () {
    function FloorService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44354/api/floor';
    }
    FloorService.prototype.getFloor = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    FloorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FloorService);
    return FloorService;
}());
export { FloorService };
//# sourceMappingURL=floor.service.js.map