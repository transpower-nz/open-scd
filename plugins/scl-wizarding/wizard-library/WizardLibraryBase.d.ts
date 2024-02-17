import { LitElement } from 'lit';
import { EditWizardRequest, CreateWizardRequest } from '../foundation.js';
import { Wizard } from './foundation.js';
export default class WizardLibraryBase extends LitElement {
    wizardRequest: EditWizardRequest | CreateWizardRequest | null;
    wizard(): Wizard | undefined;
    onClosed(): void;
}
