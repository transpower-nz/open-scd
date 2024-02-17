import { TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import './bay-editor.js';
import BaseSubstationElementEditor from './base-substation-element-editor.js';
/** [[`Substation`]] subeditor for a `VoltageLevel` element. */
export declare class VoltageLevelEditor extends BaseSubstationElementEditor {
    get voltage(): string | null;
    get header(): string;
    renderBay(): TemplateResult;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
