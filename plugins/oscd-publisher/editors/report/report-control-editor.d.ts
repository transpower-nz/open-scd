import { TemplateResult } from 'lit';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdOutlinedButton } from '@scopedelement/material-web/button/MdOutlinedButton.js';
import '@openenergytools/filterable-lists/dist/action-list.js';
import { DataSetElementEditor } from '../dataset/data-set-element-editor.js';
import { ReportControlElementEditor } from './report-control-element-editor.js';
import { BaseElementEditor } from '../base-element-editor.js';
export declare class ReportControlEditor extends BaseElementEditor {
    static scopedElements: {
        'action-list': typeof ActionList;
        'data-set-element-editor': typeof DataSetElementEditor;
        'md-outlined-button': typeof MdOutlinedButton;
        'report-control-element-editor': typeof ReportControlElementEditor;
        'md-icon-button': typeof MdIconButton;
        'md-icon': typeof MdIcon;
        'md-dialog': typeof MdDialog;
    };
    selectionList: ActionList;
    selectReportControlButton: MdOutlinedButton;
    rpControlElementEditor: ReportControlElementEditor;
    dataSetElementEditor: DataSetElementEditor;
    /** Resets selected Report and its DataSet, if not existing in new doc
    update(props: Map<string | number | symbol, unknown>): void {
      super.update(props);
  
      if (props.has('doc') && this.selectCtrlBlock) {
        const newReportControl = updateElementReference(
          this.doc,
          this.selectCtrlBlock
        );
  
        this.selectCtrlBlock = newReportControl ?? undefined;
        this.selectedDataSet = this.selectCtrlBlock
          ? updateElementReference(this.doc, this.selectedDataSet!)
          : undefined;
  
        /* TODO(Jakob Vogelsang): fix when action-list is activable
        if (
          !newReportControl &&
          this.selectionList &&
          this.selectionList.selected
        )
          (this.selectionList.selected as ListItem).selected = false;
      }
    } */
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
