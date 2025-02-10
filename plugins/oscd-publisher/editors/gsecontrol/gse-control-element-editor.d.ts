import { LitElement, TemplateResult } from 'lit';
import { MdCheckbox } from '@scopedelement/material-web/checkbox/MdCheckbox.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { SclCheckbox } from '@openenergytools/scl-checkbox';
import { SclSelect } from '@openenergytools/scl-select';
import { SclTextField } from '@openenergytools/scl-text-field';
declare const GseControlElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class GseControlElementEditor extends GseControlElementEditor_base {
    static scopedElements: {
        'scl-text-field': typeof SclTextField;
        'scl-select': typeof SclSelect;
        'scl-checkbox': typeof SclCheckbox;
        'md-text-button': typeof MdTextButton;
        'md-icon': typeof MdIcon;
        'md-checkbox': typeof MdCheckbox;
    };
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    get gSE(): Element | null;
    private gSEdiff;
    private gSEControlDiff;
    gSEInputs: SclTextField[];
    gseSave: MdTextButton;
    gSEControlInputs: (SclTextField | SclSelect | SclCheckbox)[];
    gseControlSave: MdTextButton;
    instType?: MdCheckbox;
    resetInputs(type?: 'GSEControl' | 'GSE'): void;
    private onGSEControlInputChange;
    saveGSEControlChanges(): void;
    private onGSEInputChange;
    private saveGSEChanges;
    private renderGseContent;
    private renderGseControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
