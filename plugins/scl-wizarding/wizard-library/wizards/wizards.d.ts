import { Wizard } from '../foundation.js';
type SclElementWizard = (element: Element, subWizard?: boolean, instanceElement?: Element) => Wizard | undefined;
export declare function emptyWizard(): Wizard | undefined;
export declare const wizards: Record<string, {
    edit: SclElementWizard;
    create: SclElementWizard;
}>;
export {};
