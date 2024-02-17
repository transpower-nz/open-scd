import { TemplateResult } from 'lit';
import '../../foundation/components/scl-wizarding-textfield.js';
import '../../foundation/components/scl-wizarding-checkbox.js';
import { Wizard } from '../foundation.js';
type RenderOptions = {
    name: string | null;
    desc: string | null;
    type: string | null;
    virtual: string | null;
    reservedValues: string[];
};
export declare function contentGeneralEquipmentWizard(options: RenderOptions): TemplateResult[];
export declare function createGeneralEquipmentWizard(parent: Element): Wizard;
export declare function editGeneralEquipmentWizard(element: Element): Wizard;
export {};
