import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** Pane rendering `Function` element with its children */
export declare class FunctionEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderFunctions(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
