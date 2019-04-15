import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RoomService = /** @class */ (function () {
    function RoomService(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:44354/api/room';
    }
    RoomService.prototype.getRooms = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    RoomService.prototype.getChoosenRoom = function (id) {
        var _this = this;
        this.rooms.forEach(function (item) {
            if (item.id === id) {
                _this.choosenRoom = item;
            }
        });
    };
    RoomService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RoomService);
    return RoomService;
}());
export { RoomService };
//# sourceMappingURL=room.service.js.map