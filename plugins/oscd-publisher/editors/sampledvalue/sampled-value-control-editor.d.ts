import { TemplateResult } from 'lit';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import { MdOutlinedButton } from '@scopedelement/material-web/button/MdOutlinedButton.js';
import { BaseElementEditor } from '../base-element-editor.js';
import { DataSetElementEditor } from '../dataset/data-set-element-editor.js';
import { SampledValueControlElementEditor } from './sampled-value-control-element-editor.js';
export declare class SampledValueControlEditor extends BaseElementEditor {
    static scopedElements: {
        'action-list': typeof ActionList;
        'data-set-element-editor': typeof DataSetElementEditor;
        'md-outlined-button': typeof MdOutlinedButton;
        'sampled-value-control-element-editor': typeof SampledValueControlElementEditor;
        'md-icon-button': typeof MdIconButton;
        'md-icon': typeof MdIcon;
        'md-dialog': typeof MdDialog;
    };
    selectionList: ActionList;
    selectSampledValueControlButton: MdOutlinedButton;
    elementContainer?: SampledValueControlElementEditor;
    dataSetElementEditor: DataSetElementEditor;
    /** Resets selected SMV and its DataSet, if not existing in new doc
    update(props: Map<string | number | symbol, unknown>): void {
      super.update(props);
  
      if (props.has('doc') && this.selectCtrlBlock) {
        const newSampledValueControl = updateElementReference(
          this.doc,
          this.selectCtrlBlock
        );
  
        this.selectCtrlBlock = newSampledValueControl ?? undefined;
        this.selectedDataSet = this.selectCtrlBlock
          ? updateElementReference(this.doc, this.selectedDataSet!)
          : undefined;
  
        // TODO(JakobVogelsang): add activeable to ActionList
        /* if (
          !newSampledValueControl &&
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
