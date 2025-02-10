import { LitElement, TemplateResult } from 'lit';
import { MdCheckbox } from '@scopedelement/material-web/checkbox/MdCheckbox.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { SclCheckbox } from '@openenergytools/scl-checkbox';
import { SclSelect } from '@openenergytools/scl-select';
import { SclTextField } from '@openenergytools/scl-text-field';
declare const ReportControlElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class ReportControlElementEditor extends ReportControlElementEditor_base {
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
    private optFieldsDiff;
    private trgOpsDiff;
    private reportControlDiff;
    optFieldsInputs: SclCheckbox[];
    optFieldsSave: MdTextButton;
    trgOpsInputs: SclCheckbox[];
    trgOpsSave: MdTextButton;
    reportControlInputs: (SclTextField | SclSelect | SclCheckbox)[];
    reportControlSave: MdTextButton;
    rptEnabledInput: SclTextField;
    resetInputs(): void;
    private onOptFieldsInputChange;
    private saveOptFieldChanges;
    private onTrgOpsInputChange;
    private saveTrgOpsChanges;
    private onReportControlInputChange;
    private saveReportControlChanges;
    private renderOptFieldsContent;
    private renderTrgOpsContent;
    private renderChildElements;
    private renderReportControlContent;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
