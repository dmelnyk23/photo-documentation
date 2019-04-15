import { TestBed } from '@angular/core/testing';
import { FloorService } from './floor.service';
describe('FloorService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FloorService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=floor.service.spec.js.map