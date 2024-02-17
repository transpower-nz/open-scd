import { LitElement, TemplateResult } from 'lit';
import '@material/mwc-snackbar';
import type { Snackbar } from '@material/mwc-snackbar';
/**
 * A plugin which supplements data in the Communication section
 * to show subscribing data for GSE and SMV addresses.
 */
export default class NetworkData extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    subscriptionCount: number;
    apCount: number;
    successMessage: Snackbar;
    run(): Promise<void>;
    render(): TemplateResult;
}
