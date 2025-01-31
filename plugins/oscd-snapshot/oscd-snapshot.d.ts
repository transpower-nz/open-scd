import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-snackbar';
import type { Snackbar } from '@material/mwc-snackbar';
/** An editor [[`plugin`]] to create a snapshot of the currently open SCL file */
export default class SnapshotPlugin extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    userMessage: string;
    docs: Record<string, XMLDocument>;
    userMessageUI?: Snackbar;
    run(): Promise<void>;
    render(): TemplateResult;
}
