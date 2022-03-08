import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersExampleComponent } from './parameters-example.component';

describe('ParametersExampleComponent', () => {
  let component: ParametersExampleComponent;
  let fixture: ComponentFixture<ParametersExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
