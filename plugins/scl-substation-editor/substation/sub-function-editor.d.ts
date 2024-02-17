import { TemplateResult } from 'lit';
import '@openscd/oscd-action-pane';
import './sub-function-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** Pane rendering `SubFunction` element with its children */
export declare class SubFunctionEditor extends BaseSubstationElementEditor {
    private get header();
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderSubFunctions(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
