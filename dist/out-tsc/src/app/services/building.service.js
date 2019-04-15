import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BuildingService = /** @class */ (function () {
    function BuildingService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44354/api/building';
    }
    BuildingService.prototype.getBuildings = function () {
        return this.http.get(this.baseUrl);
    };
    BuildingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BuildingService);
    return BuildingService;
}());
export { BuildingService };
//# sourceMappingURL=building.service.js.map