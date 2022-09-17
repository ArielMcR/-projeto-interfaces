import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesEIfComponent } from './classes-eif.component';

describe('ClassesEIfComponent', () => {
  let component: ClassesEIfComponent;
  let fixture: ComponentFixture<ClassesEIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesEIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesEIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
