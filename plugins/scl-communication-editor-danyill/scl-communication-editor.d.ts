import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-dialog';
import '@material/mwc-button';
import type { Dialog } from '@material/mwc-dialog';
import '@openenergytools/filterable-lists/dist/action-list.js';
import './communication-mapping-editor.js';
import { Connection } from './foundation/types.js';
export default class SlcCommunicationEditor extends LitElement {
    doc?: XMLDocument;
    get substation(): Element | null;
    gridSize: number;
    editCount: number;
    selectedConnection?: Connection;
    removeSelection: Dialog;
    removeInputs(inputs: Element[]): void;
    removeAllInputs(): void;
    renderRemoveDialog(): TemplateResult;
    render(): TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
