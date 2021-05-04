import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs';
import { AddTheaterComponent } from '../../../admin/components/add-theater/add-theater.component';


export interface DeactivationGuarded {
      canDeactivate: () => boolean;
}

@Injectable()
export class ChangesGuard implements CanDeactivate<DeactivationGuarded> {
    // constructor() {

    // }

    // canDeactivate(
    //     component: DeactivationGuarded,
    // ): boolean  {

    //     return component.canDeactivate()
    //         ? true
    //         : window.confirm(
    //             'WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.'
    //         );
    // }
    canDeactivate(component: DeactivationGuarded) {
        if (component.canDeactivate) {
            return component.canDeactivate();
        }
        return true;
    }
}
