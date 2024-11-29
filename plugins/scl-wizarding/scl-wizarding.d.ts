import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import './wizard-library/wizard-code-form.js';
import { WizardRequest } from './foundation.js';
/** `LitElement` mixin that adds a `workflow` property which [[`Wizard`]]s are
 * queued onto on incoming [[`WizardEvent`]]s, first come first displayed. */
export default class SclWizarding extends LitElement {
    /** FIFO queue of [[`Wizard`]]s to display. */
    workflow: WizardRequest[];
    libraryLitElements?: LitElement[];
    updateWizardLibraries(): void;
    private closeWizard;
    private onWizard;
    constructor();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
