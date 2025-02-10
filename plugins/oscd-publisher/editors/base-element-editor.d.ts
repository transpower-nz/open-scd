import { LitElement, TemplateResult } from 'lit';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import type { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import '@openenergytools/filterable-lists/dist/action-list.js';
declare const BaseElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class BaseElementEditor extends BaseElementEditor_base {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectCtrlBlock?: Element;
    selectedDataSet?: Element | null;
    selectDataSetDialog: MdDialog;
    newDataSet: MdIconButton;
    changeDataSet: MdIconButton;
    protected selectDataSet(dataSet: Element): void;
    private addNewDataSet;
    private showSelectDataSetDialog;
    protected renderSelectDataSetDialog(): TemplateResult;
    protected renderDataSetElementContainer(): TemplateResult;
}
export {};
