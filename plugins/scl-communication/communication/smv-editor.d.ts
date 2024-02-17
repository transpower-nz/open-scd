import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon';
import '@material/mwc-fab';
import type { Fab } from '@material/mwc-fab';
import '@openscd/oscd-action-icon';
export declare const sizableSmvIcon: TemplateResult<2>;
export declare class SmvEditor extends LitElement {
    doc: XMLDocument;
    element: Element;
    get label(): string;
    edit: Fab;
    delete: Fab;
    private openEditWizard;
    private removeElement;
    render(): TemplateResult;
}
