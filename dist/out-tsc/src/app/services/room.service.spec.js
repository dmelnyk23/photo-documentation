import { TestBed } from '@angular/core/testing';
import { RoomService } from './room.service';
describe('RoomService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RoomService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=room.service.spec.js.map