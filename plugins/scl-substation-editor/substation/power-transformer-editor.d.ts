import { TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import './transformer-winding-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `PowerTransformer` element. */
export declare class PowerTransformerEditor extends BaseSubstationElementEditor {
    /** PowerTransformer name attribute */
    get name(): string;
    renderContentPane(): TemplateResult;
    private renderTransformerWinding;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderPowerTransformerContainer(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
