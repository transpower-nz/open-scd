import { LitElement, TemplateResult } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import { TextField } from '@material/web/textfield/internal/text-field';
/**
 * A plugin which supplements data in the Communication section
 * to show subscribing data for GSE and SMV addresses.
 */
export default class NetworkConfig extends LitElement {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    docName: string;
    prpNetwork: 'A' | 'B';
    protectionSystem: '1' | '2';
    nativeVlan: string;
    substation: string;
    portData: {
        switchName: string;
        portName: string;
        iedName: string;
        receivingPortName: string;
    }[] | null;
    switchNames: string[];
    inputUI: TextField;
    importCsvUI: HTMLInputElement;
    outputUI: TextField;
    ethernetSwitchUI: TextField;
    nativeVlanUI: TextField;
    refreshInputData(): void;
    buildOutputConfiguration(): void;
    protected firstUpdated(): void;
    importData(): void;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
