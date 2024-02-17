import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@material/mwc-fab';
import type { Fab } from '@material/mwc-fab';
import '@openscd/oscd-action-icon';
export declare class GseEditor extends LitElement {
    element: Element;
    get label(): string;
    edit: Fab;
    delete: Fab;
    private openEditWizard;
    removeElement(): void;
    render(): TemplateResult;
}
