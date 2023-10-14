import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShegoleBComponent } from './shegole-b.component';

describe('ShegoleBComponent', () => {
  let component: ShegoleBComponent;
  let fixture: ComponentFixture<ShegoleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShegoleBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShegoleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
