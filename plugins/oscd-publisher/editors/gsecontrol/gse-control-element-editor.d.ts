import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-formfield';
import '@material/mwc-checkbox';
import type { Button } from '@material/mwc-button';
import type { Checkbox } from '@material/mwc-checkbox';
import '../../foundation/components/scl-checkbox.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-textfield.js';
import type { SclCheckbox } from '../../foundation/components/scl-checkbox.js';
import type { SclSelect } from '../../foundation/components/scl-select.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
export declare class GseControlElementEditor extends LitElement {
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    get gSE(): Element | null | undefined;
    private gSEdiff;
    private gSEControlDiff;
    private onGSEControlInputChange;
    private saveGSEControlChanges;
    private onGSEInputChange;
    private saveGSEChanges;
    gSEInputs?: SclTextfield[];
    gseSave: Button;
    gSEControlInputs?: (SclTextfield | SclSelect | SclCheckbox)[];
    gseControlSave: Button;
    instType?: Checkbox;
    private renderGseContent;
    private renderGseControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
