import { TemplateResult } from 'lit';
import '../../foundation/components/scl-wizarding-textfield.js';
import { Wizard } from '../foundation.js';
type RenderOptions = {
    name: string | null;
    desc: string | null;
    type: string | null;
    reservedValues: string[];
};
export declare function contentFunctionWizard(options: RenderOptions): TemplateResult[];
export declare function createFunctionWizard(parent: Element): Wizard;
export declare function editFunctionWizard(element: Element): Wizard;
export {};
