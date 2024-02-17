export declare function compareNames(a: string, b: string): number;
export declare function getChildElementsByTagName(element: Element | null | undefined, tag: string | null | undefined): Element[];
export declare function createElement(doc: Document, tag: string, attrs: Record<string, string | null>): Element;
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
type EditWizardEvent = CustomEvent<EditWizardRequest>;
type CreateWizardEvent = CustomEvent<CreateWizardRequest>;
export type WizardEvent = EditWizardEvent | CreateWizardEvent;
export declare function newEditWizardEvent(element: Element, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<EditWizardRequest>>): EditWizardEvent;
export declare function newCreateWizardEvent(parent: Element, tagName: string, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<CreateWizardRequest>>): CreateWizardEvent;
declare global {
    interface ElementEventMap {
        ['oscd-edit-wizard-request']: EditWizardRequest;
        ['oscd-create-wizard-request']: CreateWizardRequest;
    }
}
export {};
