import { TestBed } from "@angular/core/testing";
import { CookiesService } from "./cookies.service";

describe('CookiesService', () => {
  let service: CookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesService],
    });

    service = TestBed.inject(CookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
