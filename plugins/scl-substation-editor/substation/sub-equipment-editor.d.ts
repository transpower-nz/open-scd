import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-icon';
import '@openscd/oscd-action-pane';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`SubstationEditor`]] subeditor for a child-less `SubEquipment` element. */
export declare class SubEquipmentEditor extends BaseSubstationElementEditor {
    /** SubEquipment name attribute */
    get label(): string;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export declare function renderSubEquipments(parent: Element, editCount: number, showfunctions: boolean, showuserdef: boolean): TemplateResult;
