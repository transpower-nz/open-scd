import { TemplateResult } from 'lit';
import './substation/general-equipment-editor.js';
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
/** Common `CSS` styles used by substation subeditors */
export declare const styles: import("lit").CSSResult;
export declare const powerTransformerTwoWindingIcon: TemplateResult<1>;
export declare const generalConductingEquipmentIcon: TemplateResult<1>;
export declare const disconnectorIcon: TemplateResult<1>;
export declare const circuitBreakerIcon: TemplateResult<1>;
export declare const currentTransformerIcon: TemplateResult<1>;
export declare const voltageTransformerIcon: TemplateResult<1>;
export declare const earthSwitchIcon: TemplateResult<1>;
export declare function crossProduct<T>(...arrays: T[][]): T[][];
export declare function typeStr(condEq: Element): string;
export declare function getIcon(condEq: Element): TemplateResult;
interface WizardRequestBase {
    subWizard?: boolean;
}
export interface EditWizardRequest extends WizardRequestBase {
    element: Element;
}
export interface CreateWizardRequest extends WizardRequestBase {
    parent: Element;
    tagName: string;
}
export type WizardRequest = EditWizardRequest | CreateWizardRequest;
export declare function isEditRequest(wizard: any): wizard is EditWizardRequest;
export declare function isCreateRequest(wizard: any): wizard is CreateWizardRequest;
type EditWizardEvent = CustomEvent<EditWizardRequest>;
type CreateWizardEvent = CustomEvent<CreateWizardRequest>;
export type WizardEvent = EditWizardEvent | CreateWizardEvent;
type CloseWizardEvent = CustomEvent<WizardRequest>;
export declare function newEditWizardEvent(element: Element, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<EditWizardRequest>>): EditWizardEvent;
export declare function newCreateWizardEvent(parent: Element, tagName: string, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<CreateWizardRequest>>): CreateWizardEvent;
export declare function newCloseWizardEvent(wizard: WizardRequest, eventInitDict?: CustomEventInit<Partial<WizardRequest>>): CloseWizardEvent;
declare global {
    interface ElementEventMap {
        ['oscd-edit-wizard-request']: EditWizardRequest;
        ['oscd-create-wizard-request']: CreateWizardRequest;
        ['oscd-close-wizard']: WizardEvent;
    }
}
export {};
