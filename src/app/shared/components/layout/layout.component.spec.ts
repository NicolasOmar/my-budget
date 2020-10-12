import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENT
import { LayoutComponent } from './layout.component';
// MOCKS
import {
  BasicLayoutWideMock,
  EvenLayoutWideMock,
  layoutConfigMock,
  OddLayoutWideMock
} from '@mocks/data/layout-data.mock';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component with the base wide config', () => {
    expect(component).toBeTruthy();
    expect(component.contentWide).toBe(BasicLayoutWideMock);
    expect(component.contentWide).not.toBeNaN();
    expect(component.layoutConfig).toEqual(layoutConfigMock);
  });

  it('should create the component with a different wide config', () => {
    const differentConfig = {
      content: 'four wide column',
      margin: 'six wide column'
    };

    component.contentWide = EvenLayoutWideMock;
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.contentWide).not.toBeNaN();
    expect(component.contentWide).not.toBe(BasicLayoutWideMock);
    expect(component.layoutConfig).toEqual(differentConfig);
  });

  it('should maintain base config when is inserted an odd layout wide number', () => {
    component.contentWide = OddLayoutWideMock;
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.contentWide).not.toBe(BasicLayoutWideMock);
    expect(component.layoutConfig).toEqual(layoutConfigMock);
  });
});
