import { TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@openscd/oscd-action-icon';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
export declare function getLNodeIcon(lNode: Element): TemplateResult;
/** Pane rendering `LNode` element with its children */
export declare class LNodeEditor extends BaseSubstationElementEditor {
    private get header();
    private get missingIedReference();
    render(): TemplateResult;
}
export declare function renderLNodes(parent: Element, editCount: number, showfunctions: boolean): TemplateResult;
