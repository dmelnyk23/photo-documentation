import { TestBed } from '@angular/core/testing';
import { ApartmentService } from './apartment.service';
describe('ApartmentService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ApartmentService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apartment.service.spec.js.map