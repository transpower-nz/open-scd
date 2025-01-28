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
export declare type WizardRequest = EditWizardRequest | CreateWizardRequest;
export declare type EditWizardEvent = CustomEvent<EditWizardRequest>;
export declare type CreateWizardEvent = CustomEvent<CreateWizardRequest>;
export declare type CloseWizardEvent = CustomEvent<WizardRequest>;
export declare type WizardEvent = EditWizardEvent | CreateWizardEvent;
export declare function isCreateRequest(wizard: CreateWizardRequest | EditWizardRequest): wizard is CreateWizardRequest;
export declare function newEditWizardEvent(element: Element, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<EditWizardRequest>>): EditWizardEvent;
export declare function newCreateWizardEvent(parent: Element, tagName: string, subWizard?: boolean, eventInitDict?: CustomEventInit<Partial<CreateWizardRequest>>): CreateWizardEvent;
export declare function newCloseWizardEvent(wizard: WizardRequest, eventInitDict?: CustomEventInit<Partial<WizardRequest>>): CloseWizardEvent;
declare global {
    interface ElementEventMap {
        ['oscd-edit-wizard-request']: EditWizardEvent;
        ['oscd-create-wizard-request']: CreateWizardEvent;
        ['oscd-close-wizard']: WizardEvent;
    }
}
export {};
