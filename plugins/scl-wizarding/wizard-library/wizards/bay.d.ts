import { TemplateResult } from 'lit';
import '../../foundation/components/scl-wizarding-textfield.js';
import { Wizard, WizardActor } from '../foundation.js';
type RenderOptions = {
    name: string | null;
    reservedValues: string[];
    desc: string | null;
};
export declare function renderBayWizard(options: RenderOptions): TemplateResult[];
export declare function createAction(parent: Element): WizardActor;
export declare function createBayWizard(parent: Element): Wizard;
export declare function updateAction(element: Element): WizardActor;
export declare function editBayWizard(element: Element): Wizard;
export {};
