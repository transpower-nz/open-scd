import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-fab';
import type { Fab } from '@material/mwc-fab';
import '@openscd/oscd-action-icon';
/** [[`Communication`]] subeditor for a `ConnectedAP` element. */
export declare class ConnectedAPEditor extends LitElement {
    /** SCL element ConnectedAP */
    element: Element;
    /** ConnectedAP attribute apName */
    get apName(): string;
    edit: Fab;
    delete: Fab;
    private openEditWizard;
    private removeElement;
    render(): TemplateResult;
}
