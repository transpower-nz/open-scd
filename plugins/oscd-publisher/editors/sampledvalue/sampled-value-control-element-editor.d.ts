import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';
import type { Button } from '@material/mwc-button';
import type { Checkbox } from '@material/mwc-checkbox';
import '../../foundation/components/scl-checkbox.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-textfield.js';
import type { SclCheckbox } from '../../foundation/components/scl-checkbox.js';
import type { SclSelect } from '../../foundation/components/scl-select.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
export declare class SampledValueControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    /** SCL change indicator */
    editCount: number;
    get sMV(): Element | null;
    private sMVdiff;
    private smvOptsDiff;
    private sampledValueControlDiff;
    sampledValueControlInputs: (SclTextfield | SclSelect | SclCheckbox)[];
    smvControlSave: Button;
    sMVInputs: SclTextfield[];
    smvSave: Button;
    smvOptsInputs: SclCheckbox[];
    smvOptsSave: Button;
    instType?: Checkbox;
    private onSampledValueControlInputChange;
    private saveSampledValueControlChanges;
    private onSMVInputChange;
    private saveSMVChanges;
    private onSmvOptsInputChange;
    private saveSmvOptsChanges;
    private renderSmvContent;
    private renderSmvOptsContent;
    private renderOtherElements;
    private renderSmvControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
