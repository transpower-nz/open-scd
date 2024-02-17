import { LitElement, TemplateResult } from 'lit';
import 'ace-custom-element';
import '@material/mwc-button';
import '@material/mwc-dialog';
import { Dialog } from '@material/mwc-dialog';
import { Wizard, WizardInputElement, WizardPage, WizardActor } from '../../wizard-library/foundation.js';
import { CreateWizardRequest, EditWizardRequest } from '../../foundation.js';
/** A wizard style dialog consisting of several pages commiting some
 * [[`EditorAction`]] on completion and aborting on dismissal. */
export declare class SclWizardDialog extends LitElement {
    /** The [[`Wizard`]] implemented by this dialog. */
    wizard: Wizard;
    wizardRequest: EditWizardRequest | CreateWizardRequest | null;
    /** Index of the currently active [[`WizardPage`]] */
    pageIndex: number;
    dialogs: NodeListOf<Dialog>;
    inputs: NodeListOf<WizardInputElement>;
    /** The `Dialog` showing the active [[`WizardPage`]]. */
    get dialog(): Dialog | undefined;
    /** Checks the inputs of all [[`WizardPage`]]s for validity. */
    checkValidity(): boolean;
    private get firstInvalidPage();
    prev(): void;
    next(): Promise<void>;
    /** Commits `action` if all inputs are valid, reports validity otherwise. */
    act(action?: WizardActor, primary?: boolean): Promise<boolean>;
    private onClosed;
    constructor();
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    renderPage(page: WizardPage, index: number): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
