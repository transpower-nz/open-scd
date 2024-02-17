import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import type { Button } from '@material/mwc-button';
import '../../foundation/components/scl-checkbox.js';
import '../../foundation/components/scl-select.js';
import '../../foundation/components/scl-textfield.js';
import type { SclCheckbox } from '../../foundation/components/scl-checkbox.js';
import type { SclSelect } from '../../foundation/components/scl-select.js';
import type { SclTextfield } from '../../foundation/components/scl-textfield.js';
export declare class ReportControlElementEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited as provided to plugins by [[`OpenSCD`]]. */
    element: Element;
    /** SCL change indicator */
    editCount: number;
    private optFieldsDiff;
    private trgOpsDiff;
    private reportControlDiff;
    optFieldsInputs: SclCheckbox[];
    optFieldsSave: Button;
    trgOpsInputs: SclCheckbox[];
    trgOpsSave: Button;
    reportControlInputs: (SclTextfield | SclSelect | SclCheckbox)[];
    reportControlSave: Button;
    rptEnabledInput: SclTextfield;
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
