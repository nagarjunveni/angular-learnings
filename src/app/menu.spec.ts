import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {ContextMenu,ContextMenuModule,ContextMenuSub} from "./context-menu.component";
import {DomHandler} from "./dom-handler.service";
import {IconFontComponent } from '../icon-font';

import {FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer} from 'rxjs/Rx';

const globalItems  = [
            {
                label: 'File',
                icon: 'fa-file-o'
            },
            {
                label: 'Edit',
                icon: 'fa-edit'
            },
            {
                label: 'Help',
                icon: 'fa-question'
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            },
            {separator:true},
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];

@Component({
    template:`<div #containerDiv>
        <p-contextMenu [model]="items" [target]="containerDiv"></p-contextMenu>
    </div>`
})
export class TestComponent{
  public items = globalItems;
}

fdescribe('Context Menu ->',() => {
    let component : ContextMenu;
    let fixture : ComponentFixture<ContextMenu>;
    let el:DebugElement

    let testComponent: TestComponent;
    let testFixture:ComponentFixture<TestComponent>;
    let testEl:DebugElement;
    //

      beforeEach(()=>{
          TestBed.configureTestingModule({
            imports:[ContextMenuModule],
            declarations:[TestComponent]
        });

        fixture = TestBed.createComponent(ContextMenu);
        component = fixture.componentInstance;
        component.model = globalItems;
        fixture.detectChanges();
        el=fixture.debugElement;

        testFixture = TestBed.createComponent(TestComponent);
        testComponent = testFixture.componentInstance;
        testEl=testFixture.debugElement;
        testFixture.detectChanges();
      });


    it("should render or hide the context menu accordingly",()=>{
        let contextMenu = el.query(By.css(".ui-contextmenu"));
        expect(contextMenu.nativeElement.style.display).toBe('none');
        component.show();   
        fixture.detectChanges();     
        expect(contextMenu.nativeElement.style.display).toBe('block');
        component.hide();
        fixture.detectChanges();     
        expect(contextMenu.nativeElement.style.display).toBe('none');
    })
    
    it("should display the context menu items as provided ",()=>{
        let contextMenu = el.queryAll(By.css(".ui-contextmenu ul.ui-menu-list > li span.ui-menuitem-text"));
        component.show();   
        fixture.detectChanges();     
        expect(contextMenu[0].nativeElement.textContent).toBe('File');
        expect(contextMenu[1].nativeElement.textContent).toBe('Edit');
    })

})
