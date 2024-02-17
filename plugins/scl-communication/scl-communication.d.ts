import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-fab';
import type { Fab } from '@material/mwc-fab';
import './communication/subnetwork-editor.js';
export default class SclCommunicationPlugin extends LitElement {
    doc: XMLDocument;
    editCount: number;
    add: Fab;
    private createCommunication;
    private openCreateSubNetworkWizard;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
