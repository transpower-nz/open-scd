import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-icon-button';
import type { IconButton } from '@material/mwc-icon-button';
import '@openscd/oscd-action-pane';
import './connectedap-editor.js';
import './gse-editor.js';
import './smv-editor.js';
/** [[`Communication`]] subeditor for a `SubNetwork` element. */
export declare class SubNetworkEditor extends LitElement {
    doc: XMLDocument;
    editCount: number;
    /** SCL element SubNetwork */
    element: Element;
    /** SubNetwork attribute name */
    get name(): string;
    /** SubNetwork attribute desc */
    get desc(): string | null;
    /** SubNetwork attribute type */
    get type(): string | null;
    /** SubNetwork child elements BitRate label */
    get bitrate(): string | null;
    add: IconButton;
    edit: IconButton;
    delete: IconButton;
    private openCreateConnectedAPwizard;
    openEditWizard(): void;
    removeElement(): void;
    private renderSmvEditors;
    private renderGseEditors;
    private renderConnectedApEditors;
    private renderIEDs;
    private subNetworkSpecs;
    private header;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
