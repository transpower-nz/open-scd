import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-list';
import '@material/mwc-list/mwc-radio-list-item';
import '@material/mwc-textfield';
import type { Dialog } from '@material/mwc-dialog';
import type { TextField } from '@material/mwc-textfield';
/** Returns a new empty SCD document. */
export declare function newEmptySCD(id: string, versionId: string): XMLDocument;
export default class SclEditorLanding extends LitElement {
    input: HTMLInputElement;
    newDialog: Dialog;
    versions: Dialog;
    newProjectName: TextField;
    openDoc(event: Event): Promise<void>;
    private createNewProject;
    private renderNewDialog;
    render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
