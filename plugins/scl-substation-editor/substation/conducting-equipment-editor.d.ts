import { TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`SubstationEditor`]] subeditor for a `ConductingEquipment` element. */
export declare class ConductingEquipmentEditor extends BaseSubstationElementEditor {
    /** ConductingEquipment name attribute */
    get name(): string;
    renderContentPane(): TemplateResult;
    renderContentIcon(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderConductingEquipments(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
