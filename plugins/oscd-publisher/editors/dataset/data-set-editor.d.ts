import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-button';
import type { Button } from '@material/mwc-button';
import '@openenergytools/filterable-lists/dist/action-list.js';
import type { ActionList } from '@openenergytools/filterable-lists/dist/action-list.js';
import './data-set-element-editor.js';
export declare class DataSetEditor extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    selectedDataSet?: Element;
    selectionList: ActionList;
    selectDataSetButton: Button;
    /** Resets selected DataSet, if not existing in new doc */
    update(props: Map<string | number | symbol, unknown>): void;
    private renderElementEditorContainer;
    private renderSelectionList;
    private renderToggleButton;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
