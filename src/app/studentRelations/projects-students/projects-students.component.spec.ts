import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStudentsComponent } from './projects-students.component';

describe('ProjectsStudentsComponent', () => {
  let component: ProjectsStudentsComponent;
  let fixture: ComponentFixture<ProjectsStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
