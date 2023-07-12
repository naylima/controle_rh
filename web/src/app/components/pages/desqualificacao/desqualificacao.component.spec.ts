import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesqualificacaoComponent } from './desqualificacao.component';

describe('DesqualificacaoComponent', () => {
  let component: DesqualificacaoComponent;
  let fixture: ComponentFixture<DesqualificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesqualificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesqualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
