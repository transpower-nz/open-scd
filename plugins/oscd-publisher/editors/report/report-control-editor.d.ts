import { TemplateResult } from 'lit';
import '@material/mwc-button';
import type { Button } from '@material/mwc-button';
import '@openenergytools/filterable-lists/dist/action-list.js';
import type { ActionList } from '@openenergytools/filterable-lists/dist/action-list.js';
import './report-control-element-editor.js';
import BaseElementEditor from '../base-element-editor.js';
export declare class ReportControlEditor extends BaseElementEditor {
    selectionList: ActionList;
    selectReportControlButton: Button;
    /** Resets selected Report and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
