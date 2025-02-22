import { TemplateResult } from 'lit';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-list';
import '@material/mwc-radio';
import '@material/mwc-textfield';
import { Wizard } from '../foundation.js';
type RenderOptions = {
    desc: string | null;
    iedName: string | null;
    ldInst: string | null;
    prefix: string | null;
    lnClass: string | null;
    lnInst: string | null;
    lnType: string | null;
};
export declare function renderLNodeWizard(options: RenderOptions): TemplateResult[];
export declare function createLNodeWizard(parent: Element): Wizard;
export declare function editLNodeWizard(element: Element, subWizard?: boolean): Wizard;
export {};
