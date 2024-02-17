import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import './voltage-level-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`Substation`]] plugin subeditor for editing `Substation` sections. */
export declare class SubstationEditor extends BaseSubstationElementEditor {
    get header(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderSubstations(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
