import { TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
export declare class PrivateEditor extends BaseSubstationElementEditor {
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderPrivate(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
