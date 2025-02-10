import { LitElement, TemplateResult } from 'lit';
import { MdCheckbox } from '@scopedelement/material-web/checkbox/MdCheckbox.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { SclCheckbox } from '@openenergytools/scl-checkbox';
import { SclSelect } from '@openenergytools/scl-select';
import { SclTextField } from '@openenergytools/scl-text-field';
declare const SampledValueControlElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class SampledValueControlElementEditor extends SampledValueControlElementEditor_base {
    static scopedElements: {
        'scl-text-field': typeof SclTextField;
        'scl-select': typeof SclSelect;
        'scl-checkbox': typeof SclCheckbox;
        'md-text-button': typeof MdTextButton;
        'md-icon': typeof MdIcon;
        'md-checkbox': typeof MdCheckbox;
    };
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    get sMV(): Element | null;
    private sMVdiff;
    private smvOptsDiff;
    private sampledValueControlDiff;
    sampledValueControlInputs: (SclTextField | SclSelect | SclCheckbox)[];
    smvControlSave: MdTextButton;
    sMVInputs: SclTextField[];
    smvSave: MdTextButton;
    smvOptsInputs: SclCheckbox[];
    smvOptsSave: MdTextButton;
    instType?: MdCheckbox;
    resetInputs(type?: 'SampledValueControl' | 'SMV'): void;
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
export {};
