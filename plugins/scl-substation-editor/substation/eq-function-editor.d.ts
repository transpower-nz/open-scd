import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** Pane rendering `EqFunction` element with its children */
export declare class EqFunctionEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderEqFunctions(parent: Element, editCount: number, showuserdef: boolean): TemplateResult;
