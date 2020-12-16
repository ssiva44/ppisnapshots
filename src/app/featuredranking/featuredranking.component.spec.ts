import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedrankingComponent } from './featuredranking.component';

describe('FeaturedrankingComponent', () => {
  let component: FeaturedrankingComponent;
  let fixture: ComponentFixture<FeaturedrankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedrankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
