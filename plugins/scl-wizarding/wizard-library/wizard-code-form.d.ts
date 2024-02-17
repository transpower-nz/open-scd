import { LitElement, TemplateResult } from 'lit';
import 'ace-custom-element';
import '@material/mwc-dialog';
import AceEditor from 'ace-custom-element';
import '../foundation/components/scl-wizard-dialog.js';
import '../foundation/components/code-dialog.js';
import { EditWizardRequest, CreateWizardRequest } from '../foundation.js';
import { Wizard } from './foundation.js';
/**
 * Format xml string in "pretty print" style and return as a string
 * @param xml - xml document as a string
 * @param tab - character to use as a tab
 * @returns string with pretty print formatting
 */
export declare function formatXml(xml: string, tab?: string): string;
export default class WizardCodeForm extends LitElement {
    wizardRequest: EditWizardRequest | CreateWizardRequest | null;
    showCode: boolean;
    editor: AceEditor;
    wizard(): Wizard | undefined;
    onClosed(): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
