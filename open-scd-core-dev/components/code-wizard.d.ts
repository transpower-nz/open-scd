import { LitElement, TemplateResult } from 'lit';
import 'ace-custom-element';
import '@material/mwc-dialog';
import type AceEditor from 'ace-custom-element';
import { Button } from '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import { WizardRequest } from '../foundation/wizard-event.js';
export declare class CodeWizard extends LitElement {
    wizard?: WizardRequest;
    get value(): string;
    set value(val: string);
    get element(): Element | null;
    editor: AceEditor;
    dialog: Dialog;
    closeBtn: Button;
    saveBtn: Button;
    save(element: Element): void;
    onClosed(ae: CustomEvent<{
        action: string;
    }>): void;
    updated(): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
