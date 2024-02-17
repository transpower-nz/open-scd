import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@openenergytools/filterable-lists/dist/action-list.js';
import './foundation/components/scl-template-textfield.js';
import type { SclTemplateTextfield } from './foundation/components/scl-template-textfield.js';
/** An editor [[`plugin`]] for editing the `DataTypeTemplates` section. */
export default class TemplatesPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    editCount: number;
    selectedLNodeType: Element | null | undefined;
    selectedDOType: Element | null | undefined;
    selectedDAType: Element | null | undefined;
    selectedEnumType: Element | null | undefined;
    get dataTypeTemplate(): Element | null;
    lNodeTypeDiff: boolean;
    lNodeTypeInputs?: SclTemplateTextfield[];
    doTypeDiff: boolean;
    doTypeInputs?: SclTemplateTextfield[];
    daTypeDiff: boolean;
    daTypeInputs?: SclTemplateTextfield[];
    enumTypeDiff: boolean;
    enumTypeInputs?: SclTemplateTextfield[];
    private onLNodeTypeInputChange;
    private onSaveLNodeType;
    private onDOTypeInputChange;
    private onSaveDOType;
    private onDATypeInputChange;
    private onSaveDAType;
    private onEnumTypeInputChange;
    private onSaveEnumType;
    private dispatchCreateEvent;
    private selectReferencedChild;
    private renderEnumTypeChildrenList;
    private renderEnumTypeList;
    private renderDATypeChildrenList;
    private renderDATypeList;
    private renderDOTypeChildrenList;
    private renderDOTypeList;
    private renderLNodeTypeChildrenList;
    private renderLNodeTypeList;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
