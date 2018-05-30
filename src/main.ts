import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*

import {UitkExpandCollapseAnimations} from '../../core/utilities/animations';
animations:[UitkExpandCollapseAnimations.expandOrCollapsed],

[@expandOrCollapsed]="{value:'',params: {duration: tkAnimationTime|| 500}}"
(@expandOrCollapsed.start)='_toggleOverflow($event)'
(@expandOrCollapsed.done)='_toggleOverflow($event)'
                        
private _toggleOverflow = UitkExpandCollapseAnimations.toggleOverflowHandler;

export const UitkExpandCollapseAnimations: {
    readonly expandOrCollapsed: AnimationTriggerMetadata,
    readonly toggleOverflowHandler: (event: AnimationEvent) => void
} = {
    expandOrCollapsed: trigger('expandOrCollapsed', [
        state('void', style({height: '0px', visibility: 'hidden'})),
        transition(':enter', [
            animate("{{duration}}ms")]),
        transition(':leave', [
            animate("{{duration}}ms")]),
    ]),
    toggleOverflowHandler: toggleOverflowHandler
}
export function toggleOverflowHandler(event: AnimationEvent) {
    // console.log(event, 'event');
    const {phaseName} = event;
    if (phaseName === 'start') {
        event.element.style.overflow = 'hidden';
    }
    else if (phaseName === 'done') {
        event.element.style.overflow = 'visible';
    }
};
*/
platformBrowserDynamic().bootstrapModule(AppModule);
