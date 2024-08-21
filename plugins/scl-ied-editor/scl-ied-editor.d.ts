import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-fab';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import '@openscd/oscd-action-pane';
import '@openscd/oscd-action-icon';
import type { Menu } from '@material/mwc-menu';
import type { TextField } from '@material/mwc-textfield';
export default class SclIedEditorPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    get ieds(): Element[];
    get firstIed(): string;
    selectedIed: Element | null;
    selectedIEDs: Element[];
    filteredIEDs: string[] | null;
    filteredLDevices: string[] | null;
    filteredLogicalNodes: string[];
    filterValue: string;
    private updateFilterValue;
    private selectIed;
    onSelectIed(e: Event): void;
    searchField: TextField;
    iedSelect: Menu;
    private filter;
    private onFilterInput;
    private renderAnyLn;
    private renderLDevice;
    private renderIEDs;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
