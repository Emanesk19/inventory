import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShegoleAComponent } from './shegole-a.component';

describe('ShegoleAComponent', () => {
  let component: ShegoleAComponent;
  let fixture: ComponentFixture<ShegoleAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShegoleAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShegoleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
