import { LitElement, TemplateResult } from 'lit';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { SclTextField } from '@openenergytools/scl-text-field';
import { TreeGrid } from '@openenergytools/tree-grid';
declare const DataSetElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class DataSetElementEditor extends DataSetElementEditor_base {
    static scopedElements: {
        'action-list': typeof ActionList;
        'md-text-button': typeof MdTextButton;
        'md-dialog': typeof MdDialog;
        'md-icon': typeof MdIcon;
        'tree-grid': typeof TreeGrid;
        'scl-text-field': typeof SclTextField;
    };
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** The element being edited */
    element: Element | null;
    /** SCL change indicator */
    editCount: number;
    private get name();
    private get desc();
    private get fcdaCount();
    private someDiffOnInputs;
    inputs: SclTextField[];
    saveButton: MdTextButton;
    fcdaList: ActionList;
    daPickerButton: MdTextButton;
    daPickerDialog: MdDialog;
    daPicker: TreeGrid;
    daPickerSaveButton: MdTextButton;
    doPickerButton: MdTextButton;
    doPickerDialog: MdDialog;
    doPicker: TreeGrid;
    doPickerSaveButton: MdTextButton;
    resetInputs(): void;
    onInputChange(): void;
    private saveChanges;
    private saveDataObjects;
    private saveDataAttributes;
    private onMoveFCDAUp;
    private onMoveFCDADown;
    private renderFCDAList;
    private renderDataObjectPicker;
    private renderDataAttributePicker;
    private renderDataPickers;
    private renderLimits;
    private renderDataSetAttributes;
    private renderHeader;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
