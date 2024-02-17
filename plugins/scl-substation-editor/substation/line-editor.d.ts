import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
export declare class LineEditor extends BaseSubstationElementEditor {
    get voltage(): string | null;
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderLines(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
