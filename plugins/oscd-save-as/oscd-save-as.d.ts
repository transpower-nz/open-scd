import { LitElement, PropertyValues, TemplateResult } from 'lit';
import '@material/mwc-snackbar';
import type { Snackbar } from '@material/mwc-snackbar';
/**
 * WebComponent for OpenSCD to allow saving to a file system location
 * using the File System API
 */
export default class SaveAs extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    editCount: number;
    usedDirectory: string;
    userMessage: string;
    set fileHandle(handle: object | null | undefined);
    get fileHandle(): Promise<object | null | undefined>;
    usedFileNames: string[];
    userMessageUI?: Snackbar;
    getSaveFileLocation(): Promise<void>;
    constructor();
    private handleKeyPress;
    run(): Promise<void>;
    fileSave(): Promise<void>;
    protected updated(changedProperties: PropertyValues): Promise<void>;
    render(): TemplateResult;
}
