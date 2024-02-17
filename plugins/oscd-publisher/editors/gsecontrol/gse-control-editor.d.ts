import { TemplateResult } from 'lit';
import '@material/mwc-button';
import type { Button } from '@material/mwc-button';
import { ActionList } from '@openenergytools/filterable-lists/dist/action-list.js';
import './gse-control-element-editor.js';
import BaseElementEditor from '../base-element-editor.js';
export declare class GseControlEditor extends BaseElementEditor {
    selectionList: ActionList;
    selectGSEControlButton: Button;
    /** Resets selected GOOSE and its DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    protected renderElementEditorContainer(): TemplateResult;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
