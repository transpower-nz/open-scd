import { TemplateResult } from 'lit';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdOutlinedButton } from '@scopedelement/material-web/button/MdOutlinedButton.js';
import { DataSetElementEditor } from '../dataset/data-set-element-editor.js';
import { GseControlElementEditor } from './gse-control-element-editor.js';
import { BaseElementEditor } from '../base-element-editor.js';
export declare class GseControlEditor extends BaseElementEditor {
    static scopedElements: {
        'action-list': typeof ActionList;
        'data-set-element-editor': typeof DataSetElementEditor;
        'md-outlined-button': typeof MdOutlinedButton;
        'gse-control-element-editor': typeof GseControlElementEditor;
        'md-icon-button': typeof MdIconButton;
        'md-icon': typeof MdIcon;
        'md-dialog': typeof MdDialog;
    };
    selectionList: ActionList;
    selectGSEControlButton: MdOutlinedButton;
    gseControlElementEditor: GseControlElementEditor;
    dataSetElementEditor: DataSetElementEditor;
    /** Resets selected GOOSE and its DataSet, if not existing in new doc
    update(props: Map<string | number | symbol, unknown>): void {
      super.update(props);
  
      if (props.has('doc') && this.selectCtrlBlock) {
        const newGseControl = updateElementReference(
          this.doc,
          this.selectCtrlBlock
        );
  
        this.selectCtrlBlock = newGseControl ?? undefined;
        this.selectedDataSet = this.selectCtrlBlock
          ? updateElementReference(this.doc, this.selectedDataSet!)
          : undefined;
  
        /* TODO(Jakob Vogelsang): comment when action-list is activeable
        if (!newGseControl && this.selectionList && this.selectionList.selected)
          (this.selectionList.selected as ListItem).selected = false;
      }
    } */
    protected renderElementEditorContainer(): TemplateResult;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
