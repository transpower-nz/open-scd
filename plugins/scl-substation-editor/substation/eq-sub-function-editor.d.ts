import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** Pane rendering `EqSubFunction` element with its children */
export declare class EqSubFunctionEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderEqSubFunctions(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
