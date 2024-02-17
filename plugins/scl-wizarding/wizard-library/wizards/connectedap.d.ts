import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-check-list-item';
import '@material/mwc-icon';
import '@openscd/oscd-filtered-list';
import '../../foundation/components/scl-wizarding-textfield.js';
import { Wizard } from '../foundation.js';
/** @returns single page  [[`Wizard`]] for creating SCL element ConnectedAP. */
export declare function createConnectedApWizard(element: Element): Wizard;
/** @returns single page [[`Wizard`]] to edit SCL element ConnectedAP. */
export declare function editConnectedApWizard(element: Element): Wizard;
