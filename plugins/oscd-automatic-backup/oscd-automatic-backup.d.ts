import { LitElement, PropertyValueMap, TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-dialog';
import '@material/mwc-formfield';
import '@material/mwc-snackbar';
import '@material/mwc-textfield';
import type { Dialog } from '@material/mwc-dialog';
import type { Snackbar } from '@material/mwc-snackbar';
import type { TextField } from '@material/mwc-textfield';
/**
 * WebComponent for OpenSCD to allow automated periodic backups to
 * the local file system.
 */
export default class AutomaticBackup extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    editCount: number;
    usedDirectory: string;
    userMessage: string;
    usedFileNames: string[];
    dialogUI?: Dialog;
    intervalUI?: TextField;
    countUI?: TextField;
    userMessageUI?: Snackbar;
    diskUsageUI?: HTMLElement;
    timerId: number;
    docByteSize: number;
    cancelDialog: boolean;
    lastEditCount: number;
    enabled: boolean;
    count: number;
    interval: number;
    storeSettings(): void;
    restoreSettings(): void;
    constructor();
    connectedCallback(): void;
    run(): Promise<void>;
    calculateUsage(): void;
    createBackup(directoryHandle: any): Promise<void>;
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
