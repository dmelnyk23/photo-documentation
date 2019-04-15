import { TestBed } from '@angular/core/testing';
import { BuildingService } from './building.service';
describe('BuildingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BuildingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=building.service.spec.js.map